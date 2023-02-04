import React from 'react';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { CharacterList } from './CharacterList';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { NewCharacterButton } from './NewCharacterButton';
import { CharacterImport } from './CharacterImport';

export const SavedCharactersList = React.memo(() => {
    const {characters} = useHistoryManagerContext();
    const {setCurrent} = useCharacterContext();

    return <>
        <h1>Characters</h1>
        <CharacterImport/>
        <NewCharacterButton/>
        <CharacterList characters={characters} clickCallback={setCurrent}/>
    </>;
});
