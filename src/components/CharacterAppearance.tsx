import React from 'react';
import { ICharacter } from '../data/Character';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';

export interface ICharacterAppearanceProps {
    character: ICharacter;
    isEditable?: boolean;
}

export const CharacterAppearance: React.FC<ICharacterAppearanceProps> = React.memo(( props ) => {
    const {character, isEditable} = props;

    const isDisfigured = character.getDataPoint(TableType.Appearance) === 5;

    return <>
        <CharacterField character={character} table={TableType.Appearance} isEditable={isEditable}/>
        {isDisfigured ?
            <CharacterField character={character} table={TableType.Disfigured} isEditable={isEditable}/> : null}
    </>;
});
