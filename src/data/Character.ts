import { TableType } from './TableType';

const decoder = new TextDecoder('utf8');

export interface ICharacter {
    id?: number;
    name: string;
    timestamp: number;

    getDataPoint( table: TableType ): number;

    setDataPoint( table: TableType, value: number ): void;

    encode(): string;

    decode( encodedData: string ): ICharacter;

    copy(): ICharacter;
}

export class Character implements ICharacter {
    public id = undefined;
    public name = '';
    public timestamp: number;
    private data = [] as number[];

    constructor() {
        this.timestamp = new Date().getTime()
    }

    public getDataPoint( table: TableType ): number {
        return this.data[table] ?? 1;
    }

    public setDataPoint( table: TableType, value: number ) {
        this.data[table] = value;
    }

    public encode(): string {
        const u8 = new Uint8Array(this.data);
        return btoa(decoder.decode(u8));
    }

    public decode( encodedData: string ): ICharacter {
        const newCharacter = new Character();
        newCharacter.data = Array.from(new Uint8Array(atob(encodedData).split('').map(c => c.charCodeAt(0))));
        return newCharacter;
    }

    public copy() {
        return Object.assign(new Character(), {
            ...this,
            data: [...this.data]
        });
    }
}
