import React from 'react';
import './App.css';
import { TableManagerProvider } from './contexts/TableManagerProvider';
import { LocalizationProvider } from './contexts/LocalizationProvider';
import { LanguageSelector } from './components/LanguageSelector';
import { HistoryManagerProvider, useHistoryManagerContext } from './contexts/HistoryManagerProvider';
import { CharacterProvider, useCharacterContext } from './contexts/CharacterProvider';
import { RandomizeButton } from './components/RandomizeButton';
import { NewCharacterButton } from './components/NewCharacterButton';

function App() {
    return (
        <LocalizationProvider>
            <TableManagerProvider>
                <HistoryManagerProvider>
                    <CharacterProvider>
                        <LanguageSelector/>
                        <RandomizeButton/>
                        <NewCharacterButton/>
                        <TestContent/>
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
    return <div>{`${currentCharacter.timestamp} - ${currentCharacter.encode()}`}</div>
});

export default App;
