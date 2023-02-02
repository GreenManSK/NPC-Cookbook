import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';

export const RandomizeButton: React.FunctionComponent = React.memo(() => {
    const {randomizeCharacter} = useCharacterContext();
    return <button onClick={randomizeCharacter}>
        Randomize
    </button>;
});
