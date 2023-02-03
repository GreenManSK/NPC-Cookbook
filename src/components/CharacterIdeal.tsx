import React from 'react';
import { ICharacter } from '../data/Character';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';

export interface ICharacterIdealProps {
    character: ICharacter;
    isEditable?: boolean;
    table: TableType;
}

export const CharacterIdeal: React.FC<ICharacterIdealProps> = React.memo(( props ) => {
    const {character, isEditable, table} = props;

    const alignment = character.getDataPoint(TableType.Alignment);
    const textData = React.useMemo(() => ({[TableType.Alignment]: alignment}), [alignment]);

    return <>
        <CharacterField character={character} table={table} isEditable={isEditable} textData={textData}/>
    </>;
});
