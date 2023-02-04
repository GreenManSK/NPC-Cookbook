import React from 'react';
import { ICharacter } from '../data/Character';
import { TableType } from '../data/TableType';
import { useTableManagerContext } from '../contexts/TableManagerProvider';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { TextData } from '../data/TableTranslation';
import { GiRollingDices } from 'react-icons/gi';

export interface ICharacterFieldProps {
    character: ICharacter;
    table: TableType;
    isEditable?: boolean;
    textData?: TextData;
}

const DEBOUNCE_TIME = 500;

export const CharacterField: React.FC<ICharacterFieldProps> = React.memo(( props ) => {
    const {character, table, isEditable, textData} = props;
    const {save} = useHistoryManagerContext();
    const {tableManager} = useTableManagerContext();

    const characterValue = character.getDataPoint(table);

    const wasEdited = React.useRef(false);
    const [value, setValue] = React.useState(characterValue);
    const debouncedValue = useDebouncedValue(value, DEBOUNCE_TIME);

    React.useEffect(() => {
        wasEdited.current = false;
        setValue(characterValue);
    }, [characterValue, wasEdited]);

    React.useEffect(() => {
        if (wasEdited.current) {
            character.setDataPoint(table, debouncedValue)
            save(character);
        }
    }, [save, table, debouncedValue, wasEdited, character])

    const tableSize = tableManager.getTableSize(table);
    const options = React.useMemo(() =>
            [...Array(tableSize)].map(( _, key ) => {
                const value = key + 1;
                const text = tableManager.getText(
                    table,
                    value,
                    table === TableType.SpecificOccupationD20 || table === TableType.SpecificOccupationD8 ?
                        {
                            ...textData,
                            [TableType.SpecificOccupationD20]: value,
                            [TableType.SpecificOccupationD8]: value
                        }
                        : textData
                );
                return <option key={key} value={value}>{`${value}. ${text}`}</option>;
            }),
        [table, tableManager, tableSize, textData]);


    const onChange = React.useCallback(( event: React.FormEvent<HTMLSelectElement> ) => {
        wasEdited.current = true;
        setValue(parseInt(event.currentTarget.value));
    }, [wasEdited]);

    const randomize = React.useCallback(() => {
        wasEdited.current = true;
        setValue(Math.floor(Math.random() * tableSize) + 1);
    }, [wasEdited, tableSize]);

    if (!isEditable) {
        return <>{tableManager.getText(table, value, textData)}</>;
    }

    return <>
        <select value={value} onChange={onChange}>{options}</select>
        <button onClick={randomize}><GiRollingDices/></button>
    </>;
});
