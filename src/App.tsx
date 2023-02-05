import React from 'react';
import './App.css';
import { TableManagerProvider } from './contexts/TableManagerProvider';
import { LocalizationProvider } from './contexts/LocalizationProvider';
import { LanguageSelector } from './components/LanguageSelector';
import { HistoryManagerProvider } from './contexts/HistoryManagerProvider';
import { CharacterProvider } from './contexts/CharacterProvider';
import { CharacterForm } from './components/CharacterForm';
import { LeftPanel } from './components/LeftPanel';
import { CharacterDescription } from './components/CharacterDescription';

function App() {
    return (
        <LocalizationProvider>
            <TableManagerProvider>
                <HistoryManagerProvider>
                    <CharacterProvider>
                        <div className="app-container">
                            <div className="app-content">
                                <LanguageSelector/>
                                <CharacterForm/>
                                <CharacterDescription/>
                            </div>
                            <LeftPanel/>
                        </div>
                    </CharacterProvider>
                </HistoryManagerProvider>
            </TableManagerProvider>
        </LocalizationProvider>
    );
}

export default App;
