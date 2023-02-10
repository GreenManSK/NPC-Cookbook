import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import './CharacterDescription.css';
import { TableType } from '../data/TableType';
import { CharacterField } from './CharacterField';
import { CharacterFlaw } from './CharacterFlaw';
import { CharacterWork } from './CharacterWork';
import { CharacterAppearance } from './CharacterAppearance';
import { useLocalizationContext } from '../contexts/LocalizationProvider';

export const CharacterDescription = React.memo(() => {
    const {currentCharacter} = useCharacterContext();
    const {translator} = useLocalizationContext();

    const gender = currentCharacter.getDataPoint(TableType.Gender);
    const genderedTextData = React.useMemo(() => ({[TableType.Gender]: gender}), [gender])

    // TODO: Slovak
    return <div className="box character-description">
        {currentCharacter.name ? (<><strong>{currentCharacter.name}</strong><br/></>) : ''}
        <strong>{translator.getStaticText('Appearance:')}</strong>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.BodyType} textData={genderedTextData}/>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Gender}/>
        &nbsp;{translator.getStaticText('with')}&nbsp;
        <CharacterAppearance character={currentCharacter}/>,&nbsp;
        <CharacterField character={currentCharacter} table={TableType.HairStyle}/>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.HairColor}/>
        &nbsp;{translator.getStaticText('hair')}&nbsp;
        ({translator.getStaticText('and')} <CharacterField character={currentCharacter} table={TableType.FacialHair}/>).
        &nbsp;{translator.getStaticText('Wearing')}&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Color}/>
        <CharacterField character={currentCharacter} table={TableType.FashionStyle}/>&nbsp;
        (<CharacterField character={currentCharacter}
                         table={TableType.AccentColor}/>&nbsp;{translator.getStaticText('doplnky')}).
        <br/>

        <strong>{translator.getStaticText('Behavior')}:</strong>&nbsp;
        <CharacterField character={currentCharacter} table={TableType.InteractionTraits} textData={genderedTextData}/>
        &nbsp;{translator.getStaticText('and')}&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Mannerism}/>.&nbsp;
        {translator.getStaticText('Is')} <CharacterField character={currentCharacter}
                                                         table={TableType.PersonalityTraits}/> {translator.getStaticText('with talent in')}&nbsp;
        <CharacterField character={currentCharacter} table={TableType.Talents}/>.

        <br/>
        <strong>{translator.getStaticText('Work')}:</strong>&nbsp;<CharacterWork character={currentCharacter}/><br/>
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
