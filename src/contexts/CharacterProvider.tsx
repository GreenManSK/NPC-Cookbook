import React, { ReactNode } from 'react';
import { Character, ICharacter } from '../data/Character';
import { useHistoryManagerContext } from './HistoryManagerProvider';
import { useTableManagerContext } from './TableManagerProvider';

export interface ICharacterContext {
    currentCharacter: ICharacter;
    setCurrent: ( character: ICharacter ) => void;
    newCharacter: () => void;
    randomizeCharacter: () => void;
    copyCurrent: () => void;
}

export const CharacterContext = React.createContext<ICharacterContext>({
    currentCharacter: new Character(),
    setCurrent: () => {
    },
    newCharacter: () => {
    },
    randomizeCharacter: () => {
    },
    copyCurrent: () => {
    }
});

type Props = {
    children: ReactNode,
};

export const CharacterProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const {history, save, characters} = useHistoryManagerContext();
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

    const copyCurrent = React.useCallback(() => {
        const character = Object.assign(new Character(), current);
        character.id = undefined;
        save(character);
        setCurrent(character);
    }, [current, save]);

    React.useEffect(() => {
        const contextCurrent = characters.filter(c => c.id === current.id)[0];
        if (contextCurrent !== current) {
            setCurrent(contextCurrent);
        }
    }, [characters, current]);

    const value = React.useMemo(() => ({
        currentCharacter: current, setCurrent, newCharacter, randomizeCharacter, copyCurrent
    }), [current, setCurrent, newCharacter, randomizeCharacter, copyCurrent]);

    return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
});

export const useCharacterContext = () => React.useContext(CharacterContext);
