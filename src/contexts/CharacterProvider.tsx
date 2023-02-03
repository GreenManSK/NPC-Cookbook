import React, { ReactNode } from 'react';
import { Character, ICharacter } from '../data/Character';
import { useHistoryManagerContext } from './HistoryManagerProvider';
import { useTableManagerContext } from './TableManagerProvider';

export interface ICharacterContext {
    currentCharacter: ICharacter;
    setCurrent: ( character: ICharacter ) => void;
    newCharacter: () => void;
    randomizeCharacter: () => void;
}

export const CharacterContext = React.createContext<ICharacterContext>({
    currentCharacter: new Character(),
    setCurrent: () => {
    },
    newCharacter: () => {
    },
    randomizeCharacter: () => {
    }
});

type Props = {
    children: ReactNode,
};

export const CharacterProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const {history, save} = useHistoryManagerContext();
    const {tableManager} = useTableManagerContext();

    const [current, setCurrent] = React.useState(() => {
        if (history.length > 0) {
            return history[history.length - 1];
        }
        return tableManager.randomizeCharacter(new Character());
    });

    const newCharacter = React.useCallback(() => {
        const character = tableManager.randomizeCharacter(new Character());
        save(character);
        setCurrent(character);
    }, [save, tableManager]);

    const randomizeCharacter = React.useCallback(() => {
        const character = Object.assign(new Character(), {...tableManager.randomizeCharacter(current)});
        save(character);
        setCurrent(character);
    }, [current, save, tableManager]);

    const value = React.useMemo(() => ({
        currentCharacter: current, setCurrent, newCharacter, randomizeCharacter
    }), [current, setCurrent, newCharacter, randomizeCharacter]);

    return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
});

export const useCharacterContext = () => React.useContext(CharacterContext);