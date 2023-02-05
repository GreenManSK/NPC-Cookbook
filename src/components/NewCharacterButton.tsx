import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { IoIosPersonAdd } from 'react-icons/io';

export const NewCharacterButton: React.FunctionComponent = React.memo(() => {
    const {newCharacter} = useCharacterContext();
    return <button onClick={newCharacter} className="form-button">
        <IoIosPersonAdd/>
    </button>;
});
