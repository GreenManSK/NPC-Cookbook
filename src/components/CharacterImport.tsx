import React from 'react';
import { useTableManagerContext } from '../contexts/TableManagerProvider';
import { useCharacterContext } from '../contexts/CharacterProvider';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';

export const CharacterImport = React.memo(() => {
    const {tableManager} = useTableManagerContext();
    const {setCurrent} = useCharacterContext();
    const {save} = useHistoryManagerContext();
    const [value, setValue] = React.useState('');

    const onChange = React.useCallback(( event: React.FormEvent<HTMLInputElement> ) => {
        setValue(event.currentTarget.value.trim());
    }, []);

    const importCharacter = React.useCallback(() => {
        if (!value)
            return;
        const character = tableManager.decodeCharacter(value);
        setCurrent(character);
        save(character);
        setValue('');
    }, [setValue, value, save, setCurrent, tableManager]);

    return <>
        <input type="text" value={value} onChange={onChange}/>
        <button onClick={importCharacter}>Import</button>
    </>;
});
