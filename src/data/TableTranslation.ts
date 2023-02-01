import { Alignment, Occupation, TableType, UrbanRural } from './TableType';


export type TextData = { [key: number]: number };

export interface ITableTranslation {
    getText( table: TableType, value: number, data?: TextData ): string;
}

export abstract class TableTranslationBase implements ITableTranslation {
    private static TABLE_WITH_DATA = new Set<TableType>(
        [TableType.Ideals1, TableType.Ideals2, TableType.Occupation, TableType.SpecificOccupationD8, TableType.SpecificOccupationD20]
    );
    private static ALIGNMENT_FOR_IDEAL1 = [
        Alignment.Lawful,
        Alignment.Chaotic,
        Alignment.Neutral,
        Alignment.Lawful,
        Alignment.Chaotic,
        Alignment.Neutral,
        Alignment.Lawful,
        Alignment.Neutral,
        Alignment.Neutral,
        Alignment.Lawful,
        Alignment.Chaotic,
        Alignment.Neutral,
        Alignment.Lawful,
        Alignment.Chaotic,
        Alignment.Neutral,
        Alignment.Lawful,
        Alignment.Chaotic,
        Alignment.Neutral,
        Alignment.Lawful,
        Alignment.Chaotic,
    ];
    private static ALIGNMENT_FOR_IDEAL2 = [
        Alignment.Good,
        Alignment.Good,
        Alignment.Good,
        Alignment.Neutral,
        Alignment.Neutral,
        Alignment.General,
        Alignment.Evil,
        Alignment.Good,
        Alignment.Evil,
        Alignment.Good,
        Alignment.Good,
        Alignment.Good,
        Alignment.Neutral,
        Alignment.Neutral,
        Alignment.General,
        Alignment.Evil,
        Alignment.Evil,
        Alignment.Evil,
        Alignment.General,
        Alignment.Evil,
    ];
    private static URBAN_OCCUPATIONS = [
        Occupation.LesserNobility,
        Occupation.Religious,
        Occupation.Religious,
        Occupation.LegalJudicial,
        Occupation.Military,
        Occupation.Military,
        Occupation.Military,
        Occupation.Academic,
        Occupation.MerchantsAndService1,
        Occupation.MerchantsAndService2,
        Occupation.MerchantsAndService3,
        Occupation.MerchantsAndService4,
        Occupation.MerchantsAndService1,
        Occupation.MerchantsAndService2,
        Occupation.MerchantsAndService3,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Entertainment,
        Occupation.ScoundrelsAndUnderclass,
    ];
    private static RURAL_OCCUPATIONS = [
        Occupation.LesserNobility,
        Occupation.Religious,
        Occupation.LegalJudicial,
        Occupation.Military,
        Occupation.Military,
        Occupation.Military,
        Occupation.Academic,
        Occupation.MerchantsAndService4,
        Occupation.MerchantsAndService1,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Agriculture,
        Occupation.Entertainment,
        Occupation.ScoundrelsAndUnderclass,
    ];

    public getText( table: TableType, value: number, data?: TextData ): string {
        let translation: string | undefined = '';
        value -= 1;

        if (TableTranslationBase.TABLE_WITH_DATA.has(table)) {
            switch (table) {
                case TableType.Ideals1:
                    translation = this.getIdealTranslation()
                        .get(TableTranslationBase.getAlignmentForIdeal1(data?.[TableType.Alignment] ?? 1))?.[value];
                    break;
                case TableType.Ideals2:
                    translation = this.getIdealTranslation()
                        .get(TableTranslationBase.getAlignmentForIdeal2(data?.[TableType.Alignment] ?? 1))?.[value];
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

    private static getAlignmentForIdeal1( alignmentRoll: number ) {
        return TableTranslationBase.ALIGNMENT_FOR_IDEAL1[alignmentRoll];
    }

    private static getAlignmentForIdeal2( alignmentRoll: number ) {
        return TableTranslationBase.ALIGNMENT_FOR_IDEAL2[alignmentRoll];
    }

    private processOccupationData( data?: TextData ) {
        const urbanRural = (data?.[TableType.UrbanRural]) === 1 ? UrbanRural.Urban : UrbanRural.Rural;
        const occupationValue = (data?.[TableType.Occupation] ?? 1) - 1;
        const occupation = urbanRural === UrbanRural.Urban ? TableTranslationBase.URBAN_OCCUPATIONS[occupationValue] : TableTranslationBase.RURAL_OCCUPATIONS[occupationValue];
        return this.getSpecificOccupationTranslation(occupation, (data?.[TableType.SpecificOccupationD20] ?? 1) - 1, (data?.[TableType.SpecificOccupationD8] ?? 1) - 1);
    }
}
