import React from 'react';
import { ICharacter } from '../data/Character';
import Moment from 'moment';

export interface ICharacterDisplayProps {
    clickCallback?: ( character: ICharacter ) => void
    character: ICharacter
}

const DATE_FORMAT = 'DD.MM.YYYY';

export const CharacterDisplay: React.FunctionComponent<ICharacterDisplayProps>
    = React.memo(( {character, clickCallback} ) => {
    const onClick = React.useCallback(() => clickCallback?.(character), [clickCallback, character]);
    return <div onClick={onClick}>
        {`${character.name ? character.name : Moment(character.timestamp).format(DATE_FORMAT)} - ${character.encode()}`}
    </div>
});
