import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';

export const NewCharacterButton: React.FunctionComponent = React.memo(() => {
    const {newCharacter} = useCharacterContext();
    return <button onClick={newCharacter}>
        New
    </button>;
});
