import React, { ReactNode } from 'react';
import { TableManager } from '../data/TableManager';
import { useLocalizationContext } from './LocalizationProvider';
import { Localization } from '../translations/Localization';
import { TableTranslationSlovak } from '../translations/TableTranslationSlovak';
import { TableTranslationEnglish } from '../translations/TableTranslationEnglish';

export interface ITableManagerContext {
    tableManager: TableManager;
}

export const TableManagerContext = React.createContext<ITableManagerContext>({
    tableManager: {} as TableManager
})

type Props = {
    children: ReactNode,
};

const getTranslation = ( localization: Localization ) => {
    switch (localization) {
        case Localization.Slovak:
            return new TableTranslationSlovak();
        default:
            return new TableTranslationEnglish();
    }
}

export const TableManagerProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const {localization} = useLocalizationContext();
    const value = React.useMemo(() => ({
        tableManager: new TableManager(getTranslation(localization))
    }), [localization])
    return <TableManagerContext.Provider value={value}>{children}</TableManagerContext.Provider>
});

export const useTableManagerContext = () => React.useContext(TableManagerContext);
