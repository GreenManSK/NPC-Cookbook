import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { CharacterDisplay } from './CharacterDisplay';
import { RandomizeButton } from './RandomizeButton';
import { CopyButton } from './CopyButton';
import { CharacterNameInput } from './CharacterNameInput';
import { CharacterField } from './CharacterField';
import { TableType } from '../data/TableType';
import { CharacterAppearance } from './CharacterAppearance';
import { CharacterIdeal } from './CharacterIdeal';
import { CharacterWork } from './CharacterWork';
import { CharacterFlaw } from './CharacterFlaw';

export const CharacterForm = React.memo(() => {
    const {currentCharacter} = useCharacterContext();

    const isEditable = true;

    return <div>
        <h1>Character</h1>
        <CharacterNameInput character={currentCharacter}/>
        <RandomizeButton/>
        <CopyButton/>
        <CharacterDisplay character={currentCharacter}/>

        <h2>Appearance</h2>
        <CharacterField character={currentCharacter} table={TableType.Gender} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.BodyType} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.HairColor} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.Color} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.AccentColor} isEditable={isEditable}/>
        <CharacterAppearance character={currentCharacter} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.HairStyle} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.FacialHair} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.FashionStyle} isEditable={isEditable}/>

        <h2>Behaviour</h2>
        <CharacterField character={currentCharacter} table={TableType.InteractionTraits} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.Mannerism} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.PersonalityTraits} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.Talents} isEditable={isEditable}/>

        <h2>Personality</h2>
        <CharacterField character={currentCharacter} table={TableType.Alignment} isEditable={isEditable}/>
        <CharacterIdeal character={currentCharacter} table={TableType.Ideals1} isEditable={isEditable}/>
        <CharacterIdeal character={currentCharacter} table={TableType.Ideals2} isEditable={isEditable}/>
        <CharacterField character={currentCharacter} table={TableType.Bonds} isEditable={isEditable}/>
        <CharacterFlaw character={currentCharacter} isEditable={isEditable}/>

        <h2>Work</h2>
        <CharacterWork character={currentCharacter} isEditable={isEditable}/>
    </div>;
})
