import React from 'react';
import { ICharacter } from '../data/Character';
import { Color, TableType } from '../data/TableType';
import { useTableManagerContext } from '../contexts/TableManagerProvider';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { TextData } from '../data/TableTranslation';
import { GiRollingDices } from 'react-icons/gi';
import Select, { SingleValue } from 'react-select';
import { TableManager } from '../data/TableManager';
import { characterFieldSelectStyles } from './CharacterField.style';
import './CharacterField.css';

export interface ICharacterFieldProps {
    character: ICharacter;
    table: TableType;
    isEditable?: boolean;
    textData?: TextData;
}

const DEBOUNCE_TIME = 500;

export type CharacterFieldOption = { value: number, label: string, color?: Color };

const createOption = ( key: number, tableManager: TableManager, table: TableType, textData?: TextData ) => {
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
    return {value, label: `${value}. ${text}`, color: tableManager.getColor(table, value)};
}

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
            [...Array(tableSize)].map(( _, key ) => createOption(key, tableManager, table, textData)),
        [table, tableManager, tableSize, textData]);

    const onChange = React.useCallback(( newValue: SingleValue<CharacterFieldOption> ) => {
        if (!newValue)
            return;
        wasEdited.current = true;
        setValue(newValue.value);
    }, [wasEdited]);

    const randomize = React.useCallback(() => {
        wasEdited.current = true;
        setValue(Math.floor(Math.random() * tableSize) + 1);
    }, [wasEdited, tableSize]);

    if (!isEditable) {
        return <>{tableManager.getText(table, value, textData)}</>;
    }

    return <div className="character-field">
        <span className="character-field-label">{TableType[table]}:</span>
        <Select
            options={options}
            value={options[value - 1]}
            onChange={onChange}
            styles={characterFieldSelectStyles}
            isMulti={false}
            isSearchable={false}
        />
        <button onClick={randomize} className="form-button"><GiRollingDices/></button>
    </div>;
});
