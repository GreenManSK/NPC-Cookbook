import { TableType } from './TableType';
import { ICharacter } from './Character';
import { ITableTranslation } from './TableTranslation';

export interface ITableManager {
    getTableSize( table: TableType ): number;

    getRandomValue( table: TableType ): number;

    randomizeCharacter( character: ICharacter ): ICharacter;

    getText( table: TableType, value: number ): string;
}

export class TableManager implements ITableManager {

    private readonly nonStandardSizes = new Map<TableType, number>([
        [TableType.Gender, 4],
        [TableType.Ideals1, 6],
        [TableType.Ideals2, 6],
        [TableType.UbranRural, 2],
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

    public getText( table: TableType, value: number ): string {
        return this.tableTranslation.getText(table, value);
    }

}
