import { TableType } from './TableType';

export interface ITableTranslation {
    getText( table: TableType, value: number ): string;
}

export abstract class TableTranslationBase implements ITableTranslation {
    public getText( table: TableType, value: number ): string {
        const translation = this.getTranslationTable().get(table)?.[value];
        return translation ?? 'Missing translation';
    }

    protected abstract getTranslationTable(): Map<TableType, string[]>;
}
