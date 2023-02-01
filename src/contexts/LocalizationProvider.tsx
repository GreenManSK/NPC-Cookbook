import React from 'react';
import { Localization } from '../translations/Localization';

export interface ILocalizationContext {
    localization: Localization;
    setLocalization: ( localization: Localization ) => void;
}

export const LocalizationContext = React.createContext<ILocalizationContext>({
    localization: Localization.English,
    setLocalization: () => {}
})

type Props = {
    children: JSX.Element,
};

export const LocalizationProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const [localization, setLocalization] = React.useState(Localization.English);
    const value = React.useMemo(() => ({localization, setLocalization}), [localization]);
    return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>
});
export const useLocalizationContext = () => React.useContext(LocalizationContext);
