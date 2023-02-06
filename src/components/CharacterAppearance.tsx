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

    const gender = character.getDataPoint(TableType.Gender);
    const genderedTextData = React.useMemo(() => ({[TableType.Gender]: gender}), [gender])

    // TODO: Slovak
    return <>
        <CharacterField character={character} table={TableType.Appearance} isEditable={isEditable}/>
        {!isEditable && isDisfigured ? ' of ' : ''}
        {isDisfigured ?
            <CharacterField character={character} table={TableType.Disfigured} isEditable={isEditable}
                            textData={genderedTextData}/> : null}
    </>;
});
