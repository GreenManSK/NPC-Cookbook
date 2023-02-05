import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { GiRollingDices } from 'react-icons/gi';

export const RandomizeButton: React.FunctionComponent = React.memo(() => {
    const {randomizeCharacter} = useCharacterContext();
    return <button onClick={randomizeCharacter} className="form-button" title="Randomize character">
        <GiRollingDices/>
    </button>;
});
