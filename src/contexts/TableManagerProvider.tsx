import React, { ReactNode } from 'react';
import { TableManager } from '../data/TableManager';
import { useLocalizationContext } from './LocalizationProvider';

export interface ITableManagerContext {
    tableManager: TableManager;
}

export const TableManagerContext = React.createContext<ITableManagerContext>({
    tableManager: {} as TableManager
})

type Props = {
    children: ReactNode,
};

export const TableManagerProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const {translator} = useLocalizationContext();
    const value = React.useMemo(() => ({
        tableManager: new TableManager(translator)
    }), [translator])
    return <TableManagerContext.Provider value={value}>{children}</TableManagerContext.Provider>
});

export const useTableManagerContext = () => React.useContext(TableManagerContext);
