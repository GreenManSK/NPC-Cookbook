import { TableType } from '../data/TableType';
import { TableTranslationBase } from '../data/TableTranslation';

export class TableTranslationSlovak extends TableTranslationBase {
    protected getTranslationTable(): Map<TableType, string[]> {
        return new Map<TableType, string[]>();
    }
}
