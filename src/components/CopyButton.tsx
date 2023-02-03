import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';

export const CopyButton = React.memo(() => {
    const {copyCurrent} = useCharacterContext();
    return <button onClick={copyCurrent}>Copy</button>;
})
