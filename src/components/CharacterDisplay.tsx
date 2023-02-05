import React from 'react';
import { ICharacter } from '../data/Character';
import Moment from 'moment';
import './CharacterDisplay.css';

export interface ICharacterDisplayProps {
    clickCallback?: ( character: ICharacter ) => void
    character: ICharacter,
    toText?: ( character: ICharacter ) => string
}

const DATE_FORMAT = 'DD.MM.YYYY';

export const CharacterDisplay: React.FunctionComponent<ICharacterDisplayProps>
    = React.memo(( {character, clickCallback, toText} ) => {
    const onClick = React.useCallback(() => clickCallback?.(character), [clickCallback, character]);
    const text = toText ? toText(character) : `${character.name ? character.name : Moment(character.timestamp).format(DATE_FORMAT)} - ${character.encode()}`;
    return <button className="character-display" onClick={onClick}>
        {text}
    </button>;
});
