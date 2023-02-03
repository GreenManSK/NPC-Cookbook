import React from 'react';
import { ICharacter } from '../data/Character';

export interface ICharacterDisplayProps {
    clickCallback?: ( character: ICharacter ) => void
    character: ICharacter
}

export const CharacterDisplay: React.FunctionComponent<ICharacterDisplayProps>
    = React.memo(( {character, clickCallback} ) => {
    const onClick = React.useCallback(() => clickCallback?.(character), [clickCallback, character]);
    return <div onClick={onClick}>
        {`${character.name ? character.name : new Date(character.timestamp)} - ${character.encode()}`}
    </div>
});
