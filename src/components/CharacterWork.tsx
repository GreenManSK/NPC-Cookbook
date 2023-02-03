import React from 'react';
import { ICharacter } from '../data/Character';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';
import { CharacterOccupation } from './CharacterOccupation';

export interface ICharacterWorkProps {
    character: ICharacter;
    isEditable?: boolean;
}

export const CharacterWork: React.FC<ICharacterWorkProps> = React.memo(( props ) => {
    const {character, isEditable} = props;

    const urbanRural = character.getDataPoint(TableType.UrbanRural);
    const occupation = character.getDataPoint(TableType.Occupation);
    const specificOccupationD20 = character.getDataPoint(TableType.SpecificOccupationD20);
    const specificOccupationD8 = character.getDataPoint(TableType.SpecificOccupationD8);
    const textData = React.useMemo(() => ({
        [TableType.UrbanRural]: urbanRural,
        [TableType.Occupation]: occupation,
        [TableType.SpecificOccupationD20]: specificOccupationD20,
        [TableType.SpecificOccupationD8]: specificOccupationD8
    }), [urbanRural, occupation, specificOccupationD20, specificOccupationD8]);

    return <>
        <CharacterField character={character} table={TableType.UrbanRural} isEditable={isEditable}/>
        <CharacterField character={character} table={TableType.Occupation} isEditable={isEditable} textData={textData}/>
        <CharacterOccupation character={character} isEditable={isEditable} textData={textData}/>
    </>;
});
