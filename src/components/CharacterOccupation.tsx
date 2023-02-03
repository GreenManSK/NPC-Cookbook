import React from 'react';
import { ICharacter } from '../data/Character';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';
import { TextData } from '../data/TableTranslation';
import { useTableManagerContext } from '../contexts/TableManagerProvider';

export interface ICharacterOccupationProps {
    character: ICharacter;
    isEditable?: boolean;
    textData: TextData;
}

export const CharacterOccupation: React.FC<ICharacterOccupationProps> = React.memo(( props ) => {
    const {tableManager} = useTableManagerContext();
    const {character, isEditable, textData} = props;

    const occupation = tableManager.getOccupation(textData[TableType.UrbanRural], textData[TableType.Occupation]);
    const occupationSize = tableManager.getOccupationSize(occupation);

    return <>
        {occupationSize === 20 ?
            <CharacterField character={character} table={TableType.SpecificOccupationD20} isEditable={isEditable}
                            textData={textData}/> :
            <CharacterField character={character} table={TableType.SpecificOccupationD8} isEditable={isEditable}
                            textData={textData}/>}
    </>;
});
