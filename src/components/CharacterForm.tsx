import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { CharacterDisplay } from './CharacterDisplay';
import { RandomizeButton } from './RandomizeButton';
import { CopyButton } from './CopyButton';
import { CharacterNameInput } from './CharacterNameInput';

export const CharacterForm = React.memo(() => {
    const {currentCharacter} = useCharacterContext();

    return <div>
        <CharacterNameInput character={currentCharacter}/>
        <RandomizeButton/>
        <CopyButton/>
        <CharacterDisplay character={currentCharacter}/>
    </div>;
})
