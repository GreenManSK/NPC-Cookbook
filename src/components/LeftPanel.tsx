import React from 'react';
import { SavedCharactersList } from './SavedCharactersList';
import { HistoryList } from './HistoryList';
import './LeftPanel.css';
import { NewCharacterButton } from './NewCharacterButton';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { MdHistory } from 'react-icons/md';

export enum SidePanelType {
    SavedCharacters,
    HistoryList
}


export const PANEL_HIDDE_KEY = 'panel_hidden';

export const LeftPanel = React.memo(() => {
    const [openPanel, setOpenPanel] = React.useState(SidePanelType.SavedCharacters);
    const [isHidden, setIsHidden] = React.useState(() => localStorage.getItem(PANEL_HIDDE_KEY) === '1');

    const className = `left-panel-container ${isHidden ? 'is-hidden' : ''}`;
    const toggleHidePanel = React.useCallback(() => {
        const newIsHidden = !isHidden;
        localStorage.setItem(PANEL_HIDDE_KEY, newIsHidden ? '1' : '0');
        setIsHidden(newIsHidden);
    }, [isHidden]);

    return <>
        <div className={className}>
            <LeftPanelHeader openPanel={openPanel} setOpenPanel={setOpenPanel} hidePanel={toggleHidePanel}/>
            {openPanel === SidePanelType.SavedCharacters ? <SavedCharactersList/> : null}
            {openPanel === SidePanelType.HistoryList ? <HistoryList/> : null}
        </div>
        {isHidden ? <button className="form-button unhide-button" onClick={toggleHidePanel}><HiChevronDoubleLeft/>
        </button> : null}
    </>
});

export interface ILeftPanelHeaderProps {
    hidePanel?: () => void;
    hideButtonCallback?: () => void,
    openPanel: SidePanelType,
    setOpenPanel: ( panel: SidePanelType ) => void

}

export const LeftPanelHeader: React.FC<ILeftPanelHeaderProps> = React.memo(props => {
    const {openPanel, setOpenPanel, hidePanel} = props;

    const openCharacters = React.useCallback(() => setOpenPanel(SidePanelType.SavedCharacters), [setOpenPanel]);
    const openHistory = React.useCallback(() => setOpenPanel(SidePanelType.HistoryList), [setOpenPanel]);

    const savedCharactersElement = openPanel === SidePanelType.SavedCharacters ? <h1>Characters</h1> :
        <button onClick={openCharacters} className="form-button"><IoIosPeople/></button>;
    const historyElement = openPanel === SidePanelType.HistoryList ? <h1>History</h1> :
        <button onClick={openHistory} className="form-button"><MdHistory/></button>;

    return <div className="left-panel-header">
        <NewCharacterButton/>
        {savedCharactersElement}
        {historyElement}
        <button className="form-button" onClick={hidePanel}><HiChevronDoubleRight/></button>
    </div>;
});
