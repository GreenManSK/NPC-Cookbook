import React from 'react';
import { ICharacter } from '../data/Character';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';

export interface ICharacterNameInputProps {
    character: ICharacter
}

const DEBOUNCE_TIME = 1000;

export const CharacterNameInput: React.FunctionComponent<ICharacterNameInputProps> = React.memo(( {character} ) => {
    const {save} = useHistoryManagerContext();
    const wasEdited = React.useRef(false);
    const [name, setName] = React.useState('');
    const debouncedName = useDebouncedValue(name, DEBOUNCE_TIME);

    React.useEffect(() => {
        wasEdited.current = false;
        setName(character.name);
    }, [character.id, character.name, wasEdited]);

    React.useEffect(() => {
        if (wasEdited.current) {
            character.name = debouncedName;
            save(character);
        }
    }, [save, debouncedName, wasEdited, character])

    const onChange = React.useCallback(( event: React.FormEvent<HTMLInputElement> ) => {
        wasEdited.current = true;
        setName(event.currentTarget.value);
    }, [wasEdited]);

    return <input className="form-input character-name" type="text" value={name} onChange={onChange}
                  placeholder="Character name..."/>;
});
