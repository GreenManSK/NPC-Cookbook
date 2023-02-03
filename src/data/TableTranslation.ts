import { Alignment, Occupation, TableType, TableTypeHelper, UrbanRural } from './TableType';


export type TextData = { [key: number]: number };

export interface ITableTranslation {
    getText( table: TableType, value: number, data?: TextData ): string;
}

export abstract class TableTranslationBase implements ITableTranslation {
    private static TABLE_WITH_DATA = new Set<TableType>(
        [TableType.Ideals1, TableType.Ideals2, TableType.Occupation, TableType.SpecificOccupationD8, TableType.SpecificOccupationD20]
    );

    public getText( table: TableType, value: number, data?: TextData ): string {
        let translation: string | undefined = '';
        value -= 1;

        if (TableTranslationBase.TABLE_WITH_DATA.has(table)) {
            switch (table) {
                case TableType.Ideals1:
                    translation = this.getIdealTranslation()
                        .get(TableTypeHelper.getAlignmentForIdeal1(data?.[TableType.Alignment] ?? 1))?.[value];
                    break;
                case TableType.Ideals2:
                    translation = this.getIdealTranslation()
                        .get(TableTypeHelper.getAlignmentForIdeal2(data?.[TableType.Alignment] ?? 1))?.[value];
                    break;
                case TableType.Occupation:
                    translation = this.getOccupationTranslation().get((data?.[TableType.UrbanRural]) === 1 ? UrbanRural.Urban : UrbanRural.Rural)?.[value]
                    break;
                case TableType.SpecificOccupationD20:
                case TableType.SpecificOccupationD8:
                    translation = this.processOccupationData(data);
                    break;
            }
        } else {
            translation = this.getTranslationTable().get(table)?.[value];
        }
        return translation ?? 'Missing translation';
    }

    protected abstract getTranslationTable(): Map<TableType, string[]>;

    protected abstract getIdealTranslation(): Map<Alignment, string[]>;

    protected abstract getOccupationTranslation(): Map<UrbanRural, string[]>;

    protected abstract getSpecificOccupationTranslation( occupation: Occupation, d20: number, d8: number ): string;

    private processOccupationData( data?: TextData ) {
        const occupation = TableTypeHelper.getOccupation(data?.[TableType.UrbanRural] ?? 1, data?.[TableType.Occupation] ?? 1);
        return this.getSpecificOccupationTranslation(occupation, (data?.[TableType.SpecificOccupationD20] ?? 1) - 1, (data?.[TableType.SpecificOccupationD8] ?? 1) - 1);
    }
}
