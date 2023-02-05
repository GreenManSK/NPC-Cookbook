import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { RandomizeButton } from './RandomizeButton';
import { CopyButton } from './CopyButton';
import { CharacterNameInput } from './CharacterNameInput';
import { CharacterField } from './CharacterField';
import { TableType } from '../data/TableType';
import { CharacterAppearance } from './CharacterAppearance';
import { CharacterIdeal } from './CharacterIdeal';
import { CharacterWork } from './CharacterWork';
import { CharacterFlaw } from './CharacterFlaw';
import './CharacterForm.css';
import { MdFace, MdFileCopy, MdWork } from 'react-icons/md';
import { IoIosBody } from 'react-icons/io';
import { GiAmpleDress, GiScales } from 'react-icons/gi';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';

export const CharacterForm = React.memo(() => {
    const {currentCharacter} = useCharacterContext();

    const isEditable = true;
    const encodedCharacter = currentCharacter.encode();

    const copyCharacter = React.useCallback(() => navigator.clipboard.writeText(encodedCharacter), [encodedCharacter]);

    return <div className="character-form box">
        <h1>Editor</h1>
        <div className="character-form-name">
            <CharacterNameInput character={currentCharacter}/>
            <CopyButton/>
            <RandomizeButton/>
        </div>
        <div className="character-form-encoded">
            {`${encodedCharacter}`}
            <button onClick={copyCharacter} title="Copy encoded version"><MdFileCopy/></button>
        </div>

        <div className="character-form-blocks">
            <div className="character-form-block">
                <div className="character-form-block-icon">
                    <span><IoIosBody/></span>
                    <strong>Body</strong>
                </div>
                <div className="character-form-block-selects">
                    <CharacterField character={currentCharacter} table={TableType.Gender} isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.BodyType} isEditable={isEditable}/>
                    <CharacterAppearance character={currentCharacter} isEditable={isEditable}/>
                </div>
            </div>
            <div className="character-form-block">
                <div className="character-form-block-icon">
                    <span><MdFace/></span>
                    <strong>Hair</strong>
                </div>
                <div className="character-form-block-selects">
                    <CharacterField character={currentCharacter} table={TableType.HairStyle} isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.HairColor} isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.FacialHair} isEditable={isEditable}/>
                </div>
            </div>
            <div className="character-form-block">
                <div className="character-form-block-icon">
                    <span><GiAmpleDress/></span>
                    <strong>Fashion</strong>
                </div>
                <div className="character-form-block-selects">
                    <CharacterField character={currentCharacter} table={TableType.FashionStyle}
                                    isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.Color} isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.AccentColor} isEditable={isEditable}/>
                </div>
            </div>
            <div className="character-form-block">
                <div className="character-form-block-icon">
                    <span><HiOutlineChatBubbleBottomCenterText/></span>
                    <strong>Behaviour</strong>
                </div>
                <div className="character-form-block-selects">
                    <CharacterField character={currentCharacter} table={TableType.InteractionTraits}
                                    isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.Mannerism} isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.PersonalityTraits}
                                    isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.Talents} isEditable={isEditable}/>
                </div>
            </div>
            <div className="character-form-block">
                <div className="character-form-block-icon">
                    <span><GiScales/></span>
                    <strong>Personality</strong>
                </div>
                <div className="character-form-block-selects">
                    <CharacterField character={currentCharacter} table={TableType.Alignment} isEditable={isEditable}/>
                    <CharacterIdeal character={currentCharacter} table={TableType.Ideals1} isEditable={isEditable}/>
                    <CharacterIdeal character={currentCharacter} table={TableType.Ideals2} isEditable={isEditable}/>
                    <CharacterField character={currentCharacter} table={TableType.Bonds} isEditable={isEditable}/>
                    <CharacterFlaw character={currentCharacter} isEditable={isEditable}/>
                </div>
            </div>
            <div className="character-form-block">
                <div className="character-form-block-icon">
                    <span><MdWork/></span>
                    <strong>Work</strong>
                </div>
                <div className="character-form-block-selects">
                    <CharacterWork character={currentCharacter} isEditable={isEditable}/>
                </div>
            </div>
        </div>
    </div>;
})
