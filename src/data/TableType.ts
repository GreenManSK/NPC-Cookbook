export enum TableType {
    // Appearance
    Gender,
    BodyType,
    HairColor,
    Color,
    AccentColor,
    Appearance,
    HairStyle,
    FacialHair,
    Disfigured,
    FashionStyle,

    // Behaviour
    InteractionTraits,
    Mannerism,
    PersonalityTraits,
    Talents,

    // Personality
    Alignment,
    Ideals1,
    Ideals2,
    Bonds,
    Flaws,
    Triggers,

    // Work
    UrbanRural,
    Occupation,
    SpecificOccupationD20,
    SpecificOccupationD8,
}

export enum Alignment {
    General,
    Good,
    Lawful,
    Neutral,
    Evil,
    Chaotic
}

export enum UrbanRural {
    Urban,
    Rural
}

export enum Occupation {
    LesserNobility,
    Religious,
    LegalJudicial,
    Military,
    Academic,
    MerchantsAndService1,
    MerchantsAndService2,
    MerchantsAndService3,
    MerchantsAndService4,
    Agriculture,
    Entertainment,
    ScoundrelsAndUnderclass
}

export enum Color {
    White,
    Black,
    PlatinumBlonde,
    GoldenBlonde,
    CopperBlonde,
    Flaxen,
    AshBrown,
    LightBrown,
    MouseBrown,
    DarkBrown,
    BlackBrown,
    RavinBlack,
    Mahogany,
    AuburnBrown,
    CherryBrown,
    CopperBrown,
    Auburn,
    Burgandy,
    CherryRed,
    FoxRed,
    GignerRed,
    StormGrey,
    LightGrey,
    ChesnutBrown,
    WalnutBrown,
    RussetBrown,
    Burgundy,
    Rose,
    Fuchsia,
    Violet,
    RoyaleBlue,
    SkyBlue,
    Teal,
    PineGreen,
    BrightGreen,
    PaleGreen,
    LimeGreen,
    Yellow,
    Orange,
    Red,
    ClayGreen,
    OliveDrab,
    Amber,
    Gold,
    Silver,
    Jade,
    Bronze,
    Copper,
    Emerald,
    VibrantGreen,
    Tangerine,
    PepperRed,
    PastelBlue,
    Ruby,
    Lavander,
    Saphire,
    Azure,
    Cyan,
    Turquoise,
}

export class TableTypeHelper {
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
    private static HAIR_COLORS = [
        Color.White,
        Color.PlatinumBlonde,
        Color.GoldenBlonde,
        Color.CopperBlonde,
        Color.Flaxen,
        Color.AshBrown,
        Color.LightBrown,
        Color.MouseBrown,
        Color.DarkBrown,
        Color.BlackBrown,
        Color.RavinBlack,
        Color.Mahogany,
        Color.AuburnBrown,
        Color.CherryBrown,
        Color.CopperBrown,
        Color.Auburn,
        Color.Burgandy,
        Color.CherryRed,
        Color.FoxRed,
        Color.GignerRed,
    ];
    private static COLOR_COLORS = [
        Color.Black,
        Color.StormGrey,
        Color.LightGrey,
        Color.ChesnutBrown,
        Color.WalnutBrown,
        Color.RussetBrown,
        Color.Burgundy,
        Color.Rose,
        Color.Fuchsia,
        Color.Violet,
        Color.RoyaleBlue,
        Color.SkyBlue,
        Color.Teal,
        Color.PineGreen,
        Color.BrightGreen,
        Color.PaleGreen,
        Color.LimeGreen,
        Color.Yellow,
        Color.Orange,
        Color.Red,
    ];
    private static ACCENT_COLORS = [
        Color.White,
        Color.ClayGreen,
        Color.OliveDrab,
        Color.Amber,
        Color.Gold,
        Color.Silver,
        Color.Jade,
        Color.Bronze,
        Color.Copper,
        Color.Emerald,
        Color.VibrantGreen,
        Color.Tangerine,
        Color.PepperRed,
        Color.PastelBlue,
        Color.Ruby,
        Color.Lavander,
        Color.Saphire,
        Color.Azure,
        Color.Cyan,
        Color.Turquoise,
    ];

    private constructor() {
    }

    public static getAlignmentForIdeal1( alignmentRoll: number ) {
        return TableTypeHelper.ALIGNMENT_FOR_IDEAL1[alignmentRoll];
    }

    public static getAlignmentForIdeal2( alignmentRoll: number ) {
        return TableTypeHelper.ALIGNMENT_FOR_IDEAL2[alignmentRoll];
    }

    public static getOccupation( urbanRuralRoll: number, occupationRoll: number ) {
        const urbanRural = urbanRuralRoll === 1 ? UrbanRural.Urban : UrbanRural.Rural;
        const occupationValue = occupationRoll - 1;
        return urbanRural === UrbanRural.Urban ? TableTypeHelper.URBAN_OCCUPATIONS[occupationValue] : TableTypeHelper.RURAL_OCCUPATIONS[occupationValue];
    }

    public static getColor( table: TableType, value: number ): Color | undefined {
        value -= 1;
        if (table === TableType.Color) {
            return TableTypeHelper.COLOR_COLORS[value];
        }
        if (table === TableType.HairColor) {
            return TableTypeHelper.HAIR_COLORS[value];
        }
        if (table === TableType.AccentColor) {
            return TableTypeHelper.ACCENT_COLORS[value];
        }
        return undefined;
    }
}
