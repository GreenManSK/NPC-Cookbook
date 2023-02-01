import React from 'react';
import { TableManager } from '../data/TableManager';

export interface ITableManagerContext {
    tableManager?: TableManager;
}

export const TableManagerContext = React.createContext<ITableManagerContext>({
    tableManager: undefined
})

type Props = {
    children: JSX.Element,
};
export const TableManagerProvider: React.FunctionComponent<Props> = React.memo(( {children} ) => {
    const value = React.useRef({tableManager: new TableManager()})
    return <TableManagerContext.Provider value={value.current}>{children}</TableManagerContext.Provider>
});
