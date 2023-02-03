import React from 'react';
import './App.css';
import { TableManagerProvider } from './contexts/TableManagerProvider';
import { LocalizationProvider } from './contexts/LocalizationProvider';
import { LanguageSelector } from './components/LanguageSelector';
import { HistoryManagerProvider, useHistoryManagerContext } from './contexts/HistoryManagerProvider';
import { CharacterProvider, useCharacterContext } from './contexts/CharacterProvider';
import { RandomizeButton } from './components/RandomizeButton';
import { CharacterDisplay } from './components/CharacterDisplay';
import { SavedCharactersList } from './components/SavedCharactersList';
import { HistoryList } from './components/HistoryList';
import { CopyButton } from './components/CopyButton';

function App() {
    return (
        <LocalizationProvider>
            <TableManagerProvider>
                <HistoryManagerProvider>
                    <CharacterProvider>
                        <LanguageSelector/>
                        <RandomizeButton/>
                        <CopyButton/>
                        <TestContent/>
                        <SavedCharactersList/>
                        <HistoryList/>
                    </CharacterProvider>
                </HistoryManagerProvider>
            </TableManagerProvider>
        </LocalizationProvider>
    );
}

const TestContent = React.memo(() => {
    const {currentCharacter} = useCharacterContext();
    const historyContext = useHistoryManagerContext();

    console.log(currentCharacter, historyContext);
    return <CharacterDisplay character={currentCharacter}/>;
});

export default App;
