import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import './CharacterDescription.css';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';
import { CharacterFlaw } from './CharacterFlaw';
import { CharacterWork } from './CharacterWork';
import { CharacterAppearance } from './CharacterAppearance';

export const CharacterDescription = React.memo(() => {
    const {currentCharacter} = useCharacterContext();
    // TODO: Slovak
    return <div className="box character-description">
        {currentCharacter.name ? (<><strong>{currentCharacter.name}</strong><br/></>) : ''}
        <strong>Appearance:</strong>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.BodyType}/>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Gender}/>
        &nbsp;with&nbsp;
        <CharacterAppearance character={currentCharacter}/>,&nbsp;
        <CharacterField character={currentCharacter} table={TableType.HairStyle}/>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.HairColor}/>
        &nbsp;hair
        (and <CharacterField character={currentCharacter} table={TableType.FacialHair}/>).
        Wearing&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Color}/>
        &nbsp;cloths with&nbsp;
        <CharacterField character={currentCharacter} table={TableType.FashionStyle}/>&nbsp;
        (<CharacterField character={currentCharacter} table={TableType.AccentColor}/>&nbsp;accents).
        <br/>

        <strong>Behavior:</strong>&nbsp;Interacts&nbsp;
        <CharacterField character={currentCharacter} table={TableType.InteractionTraits}/>
        &nbsp;and does&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Mannerism}/>.&nbsp;
        Is <CharacterField character={currentCharacter} table={TableType.PersonalityTraits}/> with talent in&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Talents}/>.

        <br/>
        <strong>Work:</strong>&nbsp;<CharacterWork character={currentCharacter}/><br/>
        <strong>Alignment:</strong>&nbsp;<CharacterField character={currentCharacter} table={TableType.Alignment}
    /><br/>
        <strong>Ideals:</strong>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Ideals1}/>,&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Ideals2}/><br/>
        <strong>Bonds:</strong>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Bonds}/><br/>
        <strong>Flaws:</strong>&nbsp;<CharacterFlaw character={currentCharacter}/><br/>
        [{currentCharacter.encode()}]
    </div>;
});
