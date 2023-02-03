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
}
