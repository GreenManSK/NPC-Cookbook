import React from 'react';
import './App.css';
import { TableManagerProvider } from './contexts/TableManagerProvider';
import { LocalizationProvider } from './contexts/LocalizationProvider';
import { LanguageSelector } from './components/LanguageSelector';
import { HistoryManagerProvider } from './contexts/HistoryManagerProvider';
import { CharacterProvider } from './contexts/CharacterProvider';
import { SavedCharactersList } from './components/SavedCharactersList';
import { HistoryList } from './components/HistoryList';
import { CharacterForm } from './components/CharacterForm';

function App() {
    return (
        <LocalizationProvider>
            <TableManagerProvider>
                <HistoryManagerProvider>
                    <CharacterProvider>
                        <LanguageSelector/>
                        <CharacterForm/>
                        <SavedCharactersList/>
                        <HistoryList/>
                    </CharacterProvider>
                </HistoryManagerProvider>
            </TableManagerProvider>
        </LocalizationProvider>
    );
}

export default App;
