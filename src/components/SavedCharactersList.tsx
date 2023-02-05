import React from 'react';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { CharacterList } from './CharacterList';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { CharacterImport } from './CharacterImport';

export const SavedCharactersList = React.memo(() => {
    const {characters} = useHistoryManagerContext();
    const {setCurrent} = useCharacterContext();

    const charactersToRender = React.useMemo(() => [...characters].reverse(), [characters]);

    return <>
        <CharacterList characters={charactersToRender} clickCallback={setCurrent}/>
        <CharacterImport/>
    </>;
});
