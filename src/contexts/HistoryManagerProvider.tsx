import React, { ReactNode } from 'react';
import { Character, ICharacter } from '../data/Character';

export const HISTORY_LIMIT = 500;
export const CHARACTER_LIMIT = 100;
export const CHARACTER_KEY = 'characters';
export const HISTORY_KEY = 'history';

export interface IHistoryManagerContext {
    characters: ICharacter[];
    history: ICharacter[];
    save: ( character: ICharacter ) => void;
}

export const HistoryManagerContext = React.createContext<IHistoryManagerContext>({
    characters: [],
    history: [],
    save: () => {
    }
})

type Props = {
    children: ReactNode,
};
export const HistoryManagerProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const [data, setData] = React.useState(() => {
        const rawCharacters = localStorage.getItem(CHARACTER_KEY) ?? '[]';
        const rawHistory = localStorage.getItem(HISTORY_KEY) ?? '[]';
        return {
            characters: JSON.parse(rawCharacters).map(( o: any ) => Object.assign(new Character(), o)) as ICharacter[],
            history: JSON.parse(rawHistory).map(( o: any ) => Object.assign(new Character(), o)) as ICharacter[],
        };
    });

    const save = React.useCallback(( character: ICharacter ) => {
        if (!character.id) {
            character.id = Math.max(0, ...data.characters.map(ch => ch.id ?? 0)) + 1;
        }
        character.timestamp = new Date().getTime();
        const toSave = character.copy();
        const newHistory = [...data.history, character].slice(-HISTORY_LIMIT);
        const newCharacters = [...data.characters.filter(ch => ch.id !== toSave.id), toSave].slice(-CHARACTER_LIMIT);

        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
        localStorage.setItem(CHARACTER_KEY, JSON.stringify(newCharacters));
        setData({characters: newCharacters, history: newHistory})
    }, [data]);

    const value = React.useMemo(() => ({...data, save}), [data, save])

    return <HistoryManagerContext.Provider value={value}>{children}</HistoryManagerContext.Provider>
});
export const useHistoryManagerContext = () => React.useContext(HistoryManagerContext);
