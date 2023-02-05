import React from 'react';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { HiDocumentDuplicate } from 'react-icons/hi';

export const CopyButton = React.memo(() => {
    const {copyCurrent} = useCharacterContext();
    return <button className="form-button" title="Duplicate character" onClick={copyCurrent}><HiDocumentDuplicate/>
    </button>;
})
