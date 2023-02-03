import React from 'react';
import { ICharacter } from '../data/Character';
import { CharacterDisplay } from './CharacterDisplay';

export interface ICharacterListProps {
    clickCallback?: ( character: ICharacter ) => void
    characters?: ICharacter[]
}

export const CharacterList: React.FunctionComponent<ICharacterListProps>
    = React.memo(( {characters, clickCallback} ) => {
    return <>
        {characters?.map(( character, key ) =>
            <CharacterDisplay character={character} clickCallback={clickCallback} key={key}/>
        )}
    </>;
});
