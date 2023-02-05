import React from 'react';
import { ICharacter } from '../data/Character';
import { CharacterDisplay } from './CharacterDisplay';
import './CharacterList.css';
import Moment from 'moment';

export interface ICharacterListProps {
    clickCallback?: ( character: ICharacter ) => void
    characters?: ICharacter[]
}

const DATE_FORMAT = 'DD.MM.YYYY';
const characterToText = ( character: ICharacter ) => `${Moment(character.timestamp).format(DATE_FORMAT)} - ${character.name ? character.name : character.encode()}`;

export const CharacterList: React.FunctionComponent<ICharacterListProps>
    = React.memo(( {characters, clickCallback} ) => {
    return <div className="character-list">
        {characters?.map(( character, key ) =>
            <CharacterDisplay character={character} clickCallback={clickCallback} key={key} toText={characterToText}/>
        )}
    </div>;
});
