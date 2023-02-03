import { Occupation, TableType, TableTypeHelper } from './TableType';
import { ICharacter } from './Character';
import { ITableTranslation, TextData } from './TableTranslation';

export interface ITableManager {
    getTableSize( table: TableType ): number;

    getRandomValue( table: TableType ): number;

    randomizeCharacter( character: ICharacter ): ICharacter;

    getText( table: TableType, value: number ): string;

    getOccupation( urbanRuralRoll: number, occupationRoll: number ): Occupation;

    getOccupationSize( occupation: Occupation ): number;
}

export class TableManager implements ITableManager {

    private readonly nonStandardSizes = new Map<TableType, number>([
        [TableType.Gender, 4],
        [TableType.Ideals1, 6],
        [TableType.Ideals2, 6],
        [TableType.UrbanRural, 2],
        [TableType.SpecificOccupationD8, 8]
    ]);
    private readonly tableTranslation: ITableTranslation;

    constructor( tableTranslation: ITableTranslation ) {
        this.tableTranslation = tableTranslation;
    }

    public getRandomValue( table: TableType ): number {
        return Math.floor(Math.random() * this.getTableSize(table)) + 1;
    }

    public getTableSize( table: TableType ): number {
        return this.nonStandardSizes.get(table) ?? 20;
    }

    public randomizeCharacter( character: ICharacter ): ICharacter {
        for (const table of Object.values(TableType).filter(Number.isInteger)) {
            character.setDataPoint(table as TableType, this.getRandomValue(table as TableType));
        }
        return character;
    }

    public getText( table: TableType, value: number, data?: TextData ): string {
        return this.tableTranslation.getText(table, value, data);
    }

    public getOccupation( urbanRuralRoll: number, occupationRoll: number ): Occupation {
        return TableTypeHelper.getOccupation(urbanRuralRoll, occupationRoll);
    }

    public getOccupationSize( occupation: Occupation ): number {
        switch (occupation) {
            case Occupation.LesserNobility:
                return 8;
            case Occupation.Religious:
                return 8;
            case Occupation.LegalJudicial:
                return 8;
            case Occupation.Military:
                return 20;
            case Occupation.Academic:
                return 20;
            case Occupation.MerchantsAndService1:
                return 20;
            case Occupation.MerchantsAndService2:
                return 20;
            case Occupation.MerchantsAndService3:
                return 20;
            case Occupation.MerchantsAndService4:
                return 20;
            case Occupation.Agriculture:
                return 20;
            case Occupation.Entertainment:
                return 20;
            case Occupation.ScoundrelsAndUnderclass:
                return 20;
        }
    }
}
