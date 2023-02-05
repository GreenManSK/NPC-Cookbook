import React from 'react';
import { ICharacter } from '../data/Character';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';

export interface ICharacterFlawProps {
    character: ICharacter;
    isEditable?: boolean;
}

export const CharacterFlaw: React.FC<ICharacterFlawProps> = React.memo(( props ) => {
    const {character, isEditable} = props;

    const hasTrigger = character.getDataPoint(TableType.Flaws) === 19;

    // TODO: Slovak
    return <>
        <CharacterField character={character} table={TableType.Flaws} isEditable={isEditable}/>
        {!isEditable ? ' of ' : ''}
        {hasTrigger ?
            <CharacterField character={character} table={TableType.Triggers} isEditable={isEditable}/> : null}
    </>;
});
