import React from 'react';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { CharacterList } from './CharacterList';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { NewCharacterButton } from './NewCharacterButton';

export const SavedCharactersList = React.memo(() => {
    const {characters} = useHistoryManagerContext();
    const {setCurrent} = useCharacterContext();

    return <>
        <h1>Characters</h1>
        <NewCharacterButton/>
        <CharacterList characters={characters} clickCallback={setCurrent}/>
    </>;
});
