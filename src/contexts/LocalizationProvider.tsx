import React, { ReactNode } from 'react';
import { Localization } from '../translations/Localization';

export interface ILocalizationContext {
    localization: Localization;
    setLocalization: ( localization: Localization ) => void;
}

export const LocalizationContext = React.createContext<ILocalizationContext>({
    localization: Localization.English,
    setLocalization: () => {
    }
})

type Props = {
    children: ReactNode,
};

export const LOCALIZATION_KEY = 'localization';

export const LocalizationProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const [localization, setLocalization] = React.useState<Localization>(() => {
        const localLocalization = parseInt(localStorage.getItem(LOCALIZATION_KEY) ?? '0');
        return (!isNaN(localLocalization) && localLocalization) ? (localLocalization as Localization) : Localization.English;
    });
    const setLocalizationCallback = React.useCallback(( localization: Localization ) => {
        localStorage.setItem(LOCALIZATION_KEY, JSON.stringify(localization));
        setLocalization(localization);
    }, [setLocalization]);
    const value = React.useMemo(() => ({
        localization,
        setLocalization: setLocalizationCallback
    }), [localization, setLocalizationCallback]);
    return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>
});
export const useLocalizationContext = () => React.useContext(LocalizationContext);
