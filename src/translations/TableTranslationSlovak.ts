import { Alignment, Occupation, TableType, UrbanRural } from '../data/TableType';
import { TableTranslationBase } from '../data/TableTranslation';

export class TableTranslationSlovak extends TableTranslationBase {
    protected getTranslationTable(): Map<TableType, string[]> {
        return new Map<TableType, string[]>();
    }

    protected getIdealTranslation(): Map<Alignment, string[]> {
        return new Map<Alignment, string[]>();
    }

    protected getOccupationTranslation(): Map<UrbanRural, string[]> {
        return new Map<UrbanRural, string[]>();
    }

    protected getSpecificOccupationTranslation( occupation: Occupation, d20: number, d8: number ): string {
        return '';
    }
}
