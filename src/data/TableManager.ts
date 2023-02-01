import { TableType } from './TableType';
import { ICharacter } from './Character';

export interface ITableManager {
    getTableSize( table: TableType ): number;

    getRandomValue( table: TableType ): number;

    randomizeCharacter( character: ICharacter ): ICharacter;
}

export class TableManager implements ITableManager {

    private nonStandardSizes = new Map<TableType, number>([
        [TableType.Gender, 4],
        [TableType.Ideals1, 6],
        [TableType.Ideals2, 6],
        [TableType.UbranRural, 2],
        [TableType.SpecificOccupationD8, 8]
    ]);

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

}
