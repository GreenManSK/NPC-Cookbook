import React from 'react';
import { ICharacter } from '../data/Character';

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
    children: JSX.Element,
};
export const HistoryManagerProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const [data, setData] = React.useState(() => {
        const rawCharacters = localStorage.getItem(CHARACTER_KEY) ?? '[]';
        const rawHistory = localStorage.getItem(HISTORY_KEY) ?? '[]';
        return {
            characters: JSON.parse(rawCharacters) as ICharacter[],
            history: JSON.parse(rawHistory) as ICharacter[],
        };
    });

    const save = React.useCallback(( character: ICharacter ) => {
        if (!character.id) {
            character.id = Math.max(0, ...data.characters.map(ch => ch.id ?? 0)) + 1;
        }
        character.timestamp = new Date().getTime();
        const toSave = {...character};
        const newHistory = [...data.history, toSave];
        const newCharacters = [...data.characters.filter(ch => ch.id !== toSave.id), toSave];
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory.slice(-HISTORY_LIMIT)));
        localStorage.setItem(CHARACTER_KEY, JSON.stringify(newCharacters.slice(-CHARACTER_LIMIT)));
        setData({characters: newCharacters, history: newHistory})
    }, [data]);

    const value = React.useMemo(() => ({...data, save}), [data, save])

    return <HistoryManagerContext.Provider value={value}>{children}</HistoryManagerContext.Provider>
});
