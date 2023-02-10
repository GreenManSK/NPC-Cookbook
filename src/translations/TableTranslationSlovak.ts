import { Alignment, Occupation, TableType, UrbanRural } from '../data/TableType';
import { TableTranslationBase, TextData } from '../data/TableTranslation';

export class TableTranslationSlovak extends TableTranslationBase {

    private static readonly TRANSLATION_TABLE = new Map<TableType, string[]>([
        [TableType.Gender, ['Neznámého pohlavia', 'Muž', 'Žena', 'Neurčitého pohlavia']],
        [TableType.BodyType, [
            'Vychudnutý',
            'Kostnatý',
            'Vychudnutý',
            'Štíhly',
            'Úsporný',
            'Tónovaný',
            'Priemerný',
            'Priemerný',
            'Priemerný',
            'Priemerný',
            'Priemerný',
            'Priemerný',
            'Priemerný',
            'Pohodlný',
            'Sudcovitý',
            'Nafúkaný',
            'Ťažký',
            'Obezitný',
            'Morbídne obézny',
            'Monštruózne obézny',
        ]],
        [TableType.HairColor, [
            'biele',
            'platinovo blonďavími',
            'zlato blonďavími',
            'medene blonďavími',
            'slamenými',
            'šedo-hnedými',
            'svetlo-hnedými',
            'šedivo-hnedými',
            'tmavo-hnedými',
            'čierno-hnedými',
            'havrano čiernymi',
            'mahogónovými',
            'kaštanovo hnedými',
            'čerešňovo hnedými',
            'medeno hnedými',
            'gaštanovímy',
            'bordovými',
            'čerešnovými',
            'ryšavými ako líška',
            'ryšavými'
        ]],
        [TableType.Color, [
            'čierne',
            'šedé',
            'svetlo sivé',
            'gaštanovo hnedé',
            'orechovo hnedé',
            'hrdzavohnedé',
            'bordové',
            'červené',
            'ružové',
            'fialové',
            'kráľovsky modré',
            'belasé',
            'tyrkysové',
            'borovicovo zelené',
            'svetlo zelené',
            'bledo zelené',
            'limetkovo zelené',
            'žlté',
            'oranžové',
            'červené'
        ]],
        [TableType.AccentColor, [
            'biele',
            'šedo zelené',
            'olivové',
            'jantárové',
            'zlaté',
            'strieborné',
            'jadeitové',
            'bronzové',
            'medené',
            'emeraldové',
            'žiarivo zelené',
            'mandarinko oranžové',
            'paprikovo červené',
            'pastelovo modré',
            'rubínové',
            'lavanderové',
            'safírové',
            'azúrové',
            'tyrkysové',
            'modré'
        ]],
        [TableType.Appearance, [
            'Korálkovými očami',
            'Veľkými ušami',
            'Cibulovitým nosom',
            'Gombíkovým nosom',
            'Znetovrená/Postihnutá',
            'Výnimočne krásna',
            'Výnimočne škaredá',
            'Vypleštenými očami',
            'Chýbajúcimi zubami',
            'Piercingami v obočí',
            'Piercingami na perách',
            'Piercingami v nose',
            'Zapadnutými očami',
            'Tetovaniami na rukách',
            'Tetovanniami na tele',
            'Tetovaniami na tvári',
            'Tenkými perami',
            'Nezvyčajnou farbou vlasou',
            'Nezvyčajnou farbou pleti',
            'Divne veľkými ústami',
        ]],
        [TableType.HairStyle, [
            'Strapatými',
            'Plešatými',
            'Na ježka',
            'Veľmi krátkymi',
            'Krátkymi',
            'Upravenými',
            'Vlnitým',
            'Kućeravými',
            'Pohla hrnca ostrihanými',
            'Čírom',
            'Po ramená dlhými vlasmi',
            'Zdobenými',
            'Divokými',
            'Zdobenými',
            'Dlhými',
            'Zapletenými',
            'Zdobenými',
            'Veľmi dlhými',
            'Zapletenými',
            'Zdobenými'
        ]],
        [TableType.FacialHair, [
            'Náznakom brady',
            'Malým strniskom',
            'Silným strniskom',
            'Tenkými fúzikmi',
            'Upraveným mustášom',
            'Bradkou',
            'Kozou briadkou',
            'Mustášom',
            'Motorkárskou bradou',
            'Veĺkým mustášom',
            'Bokombradami',
            'Upravenou bradou',
            'Kozou bradkou',
            'Plnou bradou',
            'Dlhou bradou',
            'Zapletanou bradou',
            'Veľmi dlhou bradou',
            'Zdobenou bradou',
            'Zapletanou bradou',
            'Zdobenou bradou'
        ]],
        [TableType.Disfigured, [
            'Slepý',
            'Hluchý',
            'Slepý a hluchý',
            'Strašidelný kašel',
            'Idiot',
            'Krívajúci',
            'Bez ruky',
            'Bez oka',
            'Bez pár prstov',
            'Bez chodidla',
            'Bez ruky',
            'Bez nohy',
            'Bez časti ruky',
            'Nemý',
            'Paraplegik',
            'Jazvami po popáleninách',
            'Jazvami po násilý ',
            'Chorobou kože',
            'Zhrbené alebo pokrivené držanie tela',
            'Triaškov'
        ]],
        [TableType.FashionStyle, [
            'Výrazný náramok',
            'Výraznú čelenku',
            'Výrazný náhrdelník/medailón',
            'Výrazný prsteň(-ne)',
            'Exotické/zahraničné oblečenie',
            'Výrazné oblečenie s vlajúcimi šatkami',
            'Výrazné oblečenie s volánmi a šerpami',
            'Výrazné  výstredné oblečenie',
            'Priliehavé a praktické oblečenie',
            'Formálne oblečenie',
            'Klobúk zvláštnej farby',
            'Klobúk zvláštneho štýlu',
            'Nadmerné konzervatívne (kryjúce) oblečenie',
            'Zalátané oblečenie',
            'Zalátané slávnostné oblećenie',
            'Zalátané zvyšky oblečenia',
            'Výrazné pracky',
            'Výrazné popruhy',
            'Provokatívne (málo zahalené) oblečenie',
            'Dotrhané oblečenie'
        ]],
        [TableType.InteractionTraits, [
            'Argumentatívny',
            'Arogantný',
            'Priami',
            'Zvedavý',
            'Vyslovuje príliš jasne',
            'Rád vysvetluje',
            'Formálny',
            'Priatelský',
            'Úprimný',
            'Výbušný',
            'Podráždený',
            'Vtipný',
            'Šušlavý',
            'Hlasný',
            'Ponurý',
            'Drzý',
            'Veľa nadáva',
            'Koktavý',
            'Podozrievavý',
            'Šepká'
        ]],
        [TableType.Mannerism, [
            'Sklony k spevu, pískaniu alebo hmkaniu',
            'Ťahá si peru',
            'Hýbe rukami',
            'Ťahá si ruku',
            'Hrá sa s niečim medzi prstami',
            'Žuje nejaký predmet',
            'Vždy fajčí',
            'Hrá sa s vlasmi',
            'Škriabe si nechty',
            'Nikdy sa nerelaxuje',
            'Vždy je',
            'Posadnutý čistotou',
            'Vždy píše/kreslí v malom zošite',
            'Vždy sa sťažuje na teplotu',
            'Musí všetko preverovať dvakrát',
            'Vždy niečo pije',
            'Vždy kašle/chrcle',
            'Spí kdekoľvek a kedykoľvek',
            'Žuva/škriabe pery',
            'Vyhýba sa kontaktu s očami'
        ]],
        [TableType.PersonalityTraits, [
            'Dobrodružný',
            'Odtažitý',
            'Zdráhavý',
            'Rád rozpráva',
            'Kompulzívne',
            'Zdvorilý',
            'Energetický',
            'Ponurý',
            'Ochotný pomôcť',
            'Štedrý',
            'Lenivý',
            'Veselý',
            'Ústupčivý',
            'Tvrdohlavý',
            'Pružný',
            'Tichý',
            'Tajnostkársky',
            'Sebecký',
            'Vážny',
            'Zodpovedný'
        ]],
        [TableType.Talents, [
            'Zvieratá',
            'Umelecký',
            'Hulvát',
            'Truhlár',
            'Deti',
            'Kuchár',
            'Šípky',
            'Maskovanie',
            'Hry',
            'Rozhovory/Výsluchy',
            'Šťastie',
            'Perfektná pamäť',
            'herectvo',
            'tanečník',
            'nástroj',
            'žonglér',
            'spev',
            'Hádanky',
            'Hovorí viacerými jazykmi',
            'Uličný'
        ]],
        [TableType.Alignment, [
            'Lawful Good',
            'Chaotic Good',
            'Neutral Good',
            'Lawful Neutral',
            'Chaotic Neutral',
            'Neutral',
            'Lawful Evil',
            'Neutral Good',
            'Neutral Evil',
            'Lawful Good',
            'Chaotic Good',
            'Neutral Good',
            'Lawful Neutral',
            'Chaotic Neutral',
            'Neutral',
            'Lawful Evil',
            'Chaotic Evil',
            'Neutral Evil',
            'Lawful Neutral',
            'Chaotic Evil'
        ]],
        [TableType.Bonds, [
            'Domovník',
            'Dlh, česť',
            'Dlh, život',
            'Dlh, peňažný',
            'Priťahovaný k špeciálnemu miestu',
            'Spomienkový predmet, sentimentálny',
            'Spomienkový predmet, cenný',
            'Verný patronovi',
            'Pomsta',
            'Osobný životný cieľ',
            'Ochranný voči kolegom',
            'Ochranný voči rodine',
            'Ochranný voči miestu alebo územiu',
            'Qest, osvietenie',
            'Quest, sláva',
            'Quest, stratený predmet',
            'Quest, stratená osoba',
            'Obnova, česť',
            'Obnova, miesto',
            'Romantický záujem'
        ]],
        [TableType.Flaws, [
            'Závislosť',
            'Pýcha',
            'Dekadentné potešenie',
            'Zdiskreditovaný',
            'Ľahko zaslepený',
            'Hlúpa statečnosť',
            'Zakázaná láska',
            'Vášnivý rivalita',
            'Prenasledovaný',
            'Silná chamtivosť',
            'Fyzické obmedzenie',
            'Vlastníctvo zakázaných znalostí',
            'Mocný nepriateľ',
            'Predsudky/nenávisť',
            'Sklon k zúrivosti',
            'Psychologické obmedzenie',
            'Tajný zločin alebo previnenie',
            'Spoločenské obmedzenie',
            'Trigger/fóbia',
            'Svedok tragédie'
        ]],
        [TableType.Triggers, [
            'Presadzovanie názoru',
            'Byť sám',
            'Bezpečnosť detí',
            'Tma',
            'Mŕtve veci',
            'Jedenie pred ostatnými',
            'Uzavreté priestory',
            'Cudzinci',
            'Baktérie a nečistota',
            'Výšky',
            'Choroby a ochorenia',
            'Small Talk',
            'Stretávanie sa s novými ľuďmi',
            'Peniaze',
            'Otvorené priestory',
            'Protichodné pohlavie',
            'Vystúpenia',
            'Pavúky',
            'Rozprávanie sa s autoritatívnymi osobami',
            'Hromy a blesky'
        ]],
        [TableType.UrbanRural, [
            'Mesto',
            'Vidiek'
        ]]
    ]);

    private static IDEAL_TRANSLATION = new Map<Alignment, string[]>([
        [Alignment.General, [
            'Túžba',
            'Objav',
            'Sláva',
            'Identity',
            'Národ',
            'Spása'
        ]],
        [Alignment.Good, [
            'Krása',
            'Charita',
            'Väčšie dobro',
            'Život',
            'Rešpekt',
            'Služba'
        ]],
        [Alignment.Lawful, [
            'Túžba',
            'Objav',
            'Sláva',
            'Identita',
            'Národ',
            'Vykúpenie'
        ]],
        [Alignment.Neutral, [
            'Rovnováha',
            'Vedomosti',
            'Ži a nechaj žiť',
            'Moderácia',
            'Príroda',
            'Ľudia'
        ]],
        [Alignment.Evil, [
            'Dominancia',
            'Chamtivosť',
            'Moc',
            'Bolesť',
            'Pomsta',
            'Masakra'
        ]],
        [Alignment.Chaotic, [
            'Náhoda',
            'Zmena',
            'Tvorivosť',
            'Svoboda',
            'Nezávislosť',
            'Zábava'
        ]]
    ]);

    private static readonly OCCUPATION_TRANSLATION = new Map<UrbanRural, string[]>([
        [UrbanRural.Urban, [
            'Menšia šľachta',
            'Náboženský',
            'Náboženský',
            'Právne/súdne',
            'Vojenské',
            'Vojenské',
            'Vojenské',
            'Akademické',
            'Obchodník/služby',
            'Obchodník/služby',
            'Obchodník/služby',
            'Obchodník/služby',
            'Obchodník/služby',
            'Obchodník/služby',
            'Obchodník/služby',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Zabávač',
            'Zloduch'
        ]],
        [UrbanRural.Rural, [
            'Menšia šľachta',
            'Náboženský',
            'Právne/súdne',
            'Vojenské',
            'Vojenské',
            'Vojenské',
            'Akademické',
            'Obchodník/služby',
            'Obchodník/služby',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Poľnohospodárstvo',
            'Zabávač',
            'Zloduch'
        ]]
    ]);

    private static readonly SPECIFIC_OCCUPATION_TRANSLATION = new Map<Occupation, string[]>([
        [Occupation.LesserNobility, [
            'Dobrodruh - mladý potomok šľachtického rodu, ktorý sa rozhodol putovať svetom',
            'Diletant - mladý potomok šľachtického rodu, ktorý sa venuje rôznym záujmom',
            'Diplomat - zástupca svojho rodu pri rokovaniach s ostatnými šľachtickými domami',
            'Rytier - dobre vyškolený bojovník, zručný so šabľou a kopijou',
            'Minister - politická figúra, ktorú menoval vládca',
            'Šľachtic - člen známej, možno mocnej rodiny',
            'Strážca - veľmi mladý šľachtic, ktorý začína svoj tréning na rytiera',
            'Panoš - mladý šľachtic, ktorý postupuje na ceste k rytierstvu'
        ]],
        [Occupation.Religious, [
            'Kostolník — podriadený s menšími úlohami',
            'Kurát — pomocník duchovenstva k rektorovi',
            'Reeve — hlásnik s úlohou začatia a ukončenia služieb',
            'Sexton — správca majetku cirkvi',
            'Teológ',
            'Akolyt — začiatočný kňaz',
            'Zverenec — dieťa pod starostlivosťou cirkvi, často sirota',
            'Klerik'
        ]],
        [Occupation.LegalJudicial, [
            'Súdny exekútor — riadi zatknutia a vykonávania',
            'Komorník — strážca kráľovskej alebo vysoko-noblesnej rezidencie',
            'Kanclér — tajomník kráľa alebo noblesy',
            'Konštábel — vedúci zákonníka na dohľad nad mierom',
            'Diplomat',
            'Účtovník — správca kráľovských fondov',
            'Väzňovský',
            'Sudca'
        ]],
        [Occupation.Military, [
            'Pomocný dôstojník — asistent vyššieho dôstojníka',
            'Lukostrelci',
            'Ochranca',
            'Lovec odmien',
            'Jazdec',
            'Inžinier — navrhuje a stavia vojenské stroje, ako sú katapulty a balisty',
            'Lesník — strážca, ktorý často má moc konať ako vláda v lesnom prostredí',
            'Strážca brány alebo poplatkár',
            'Väzňovský',
            'Námorník',
            'Nájomný vojak',
            'Navigátor — špeciálna trieda námorníka',
            'Špeh',
            'Vojak',
            'Vojak',
            'Vojak',
            'Vojak',
            'Vojak',
            'Mučiteľ',
            'Strážnik'
        ]],
        [Occupation.Academic, [
            'Alchymista — chemik',
            'Architekt — majster staviteľ',
            'Askét — pustovník alebo kráčajúci mních',
            'Astrológ',
            'Holič — doktor, chirurg, krvavý písač, zubár a strihač',
            'Advokát — právnik',
            'Úradník — miestny funkcionár, služobník nejakej mocnejšej politickej osoby',
            'Kartograf',
            'Inžinier — staviteľ ciest, mostov, hradov, fortifikácií a obliehacích strojov',
            'Heralt — ohlasovateľ a doručovateľ správ zástupcom lorda',
            'Historik',
            'Iluminátor — malujú rukopisy',
            'Knihovník',
            'Matematik',
            'Mních/Mníška — akademik venovaný modlitbe a duchovnosti',
            'Filozof',
            'Múdry',
            'Vedec',
            'Kancelár — písač zručný v nahrávaní alebo kopírovaní dokumentov',
            'Učiteľ'
        ]],
        [Occupation.MerchantsAndService1, [
            'Apothekár - predajca bylinných liekov',
            'Architekt',
            'Zbrojár',
            'Umelec - portrétny maliar',
            'Pekár',
            'Bankár',
            'Holič',
            'Kováč',
            'Lodník - cesta po jazere alebo rieke',
            'Knihovník',
            'Lukovník — remeselník na luky',
            'Mosadziar — pracovník s mosadzom',
            'Pivovarník - výrobca piva',
            'Murár - robotník odborný na stavbu múrov a kanálov',
            'Mäsiar',
            'Stolár - remeselník, zručný v matematike aj v drevenej práci',
            'Kartograf - mapovač',
            'Výrobca a opravár vozov',
            'Kandeláber - výrobca sviečok, niekedy aj mydlár',
            'Putujúci predavač.'
        ]],
        [Occupation.MerchantsAndService2, [
            'Úradník',
            'Kravatár - výrobcu odevov',
            'Kočiš - vodič koča',
            'Ševčík - vyrába a opravuje topánky',
            'Kuchár',
            'Debnár — výrobcu sudov',
            'Drapérista - obchodník s látkou',
            'Farbič - výrobca atramentov, farieb, farieb a škvŕn',
            'Vyrezávač',
            'Farmár',
            'Rybár',
            'Predavač rýb',
            'Věštec',
            'Kožušník',
            'Zahradník',
            'Sklár',
            'Sklár - sklársky pracovník, vrátane okien',
            'Zlatník alebo striborník',
            'Hrobník',
            'Obchodník s potravinami'
        ]],
        [Occupation.MerchantsAndService3, [
            'Chovateľ - stará sa o zvieratá',
            'Klobučník',
            'Pastier - strážca hospodárskych zvierat',
            'Lovec',
            'Majiteľ hostinca',
            'Klenotník',
            'Stolár - výrobca nábytku',
            'Prádelníčka',
            'Kožiar',
            'Chlapček s lampášom - nesie lampy v noci',
            'Zámočník',
            'Služka / sluha',
            'Kamenár',
            'Textilný obchodník (Mercer)',
            'Posol',
            'Mlynár',
            'Baník',
            'Pôžičkár',
            'Stajňový - stará sa o kone',
            'Maliar alebo Kráslič'
        ]],
        [Occupation.MerchantsAndService4, [
            'Predavač - putujúci obchodník s tovarmi',
            'Nosič batožiny',
            'Krysár',
            'Námorník',
            'Pisár',
            'Šička',
            'Sluha - slúžka, pán domu, prítomný, správca, atď.',
            'Staviteľ lodí',
            'Pletáčka - výrobcu pletiva a šnúry',
            'Nakladateľ - ktorý načína a vysúva tovary z plaviacich sa lodí alebo karavány',
            'Krajčír',
            'Kožičiar - výrobca kože',
            'Majiteľ taverny',
            'Daňový zberač',
            'Strešný opravár',
            'Šperkár - opravuje poháre a iné malé predmety',
            'Obchodník - pozemný alebo morský',
            'Lovca',
            'Vinár - výrobca vín',
            'Tkáč'
        ]],
        [Occupation.Agriculture, [
            'Včelár',
            'Vozka',
            'Bedňár',
            'Farma, jačmeň',
            'Farma, fazuľa',
            'Farma, hrach',
            'Farma, žito',
            'Farma, špeciálne plodiny',
            'Farma, pšenica',
            'Rybár',
            'Pásťov',
            'Lovec',
            'Mlynár',
            'Koniar – stará sa o kone',
            'Farma',
            'Správca pozemkov',
            'Pastier',
            'Kožičiar',
            'Lovca',
            'Lesník'
        ]],
        [Occupation.Entertainment, [
            'Akrobat',
            'Herec',
            'Majster zvierat',
            'Klaun',
            'Tanečník',
            'Lekárnik',
            'Ohňožrút',
            'Vykladač budúcnosti - môže mať skutočnú moc v fantastickom svete',
            'Geek/sideshow freak',
            'Žonglér',
            'Minstrel',
            'Orátor - komponuje a recituje epické básne',
            'Maliar (scény na javisku)',
            'Hráč - menší herec',
            'Kúzelník',
            'Spevák',
            'Chodec na chodúľoch',
            'Rozprávač príbehov',
            'Silák',
            'Manažér'
        ]],
        [Occupation.ScoundrelsAndUnderclass, [
            'Vrah - zabije za peniaze',
            'Lúpežník - jeden z gangu zlodejov, ktorí kradnú násilím',
            'Žobrák',
            'Zlodej - kradne prelomením a vstupom',
            'Podvodník',
            'Prekupník — nájde kupcov pre ukradnuté veci, môže slúžiť ako lichvár',
            'Gambler',
            'Operátor cechu — vplyvný člen zločineckej syndikácie',
            'Lúpežník - samotný bandita, ktorý kradne násilím',
            'Vrah - zabije z nutkania',
            'Kapsár alebo škrabošník - kradne tajne',
            'Obstarávateľ — špecialista v hľadaní čohokoľvek, čo by mohol byť zákazník hľadajúci',
            'Prostitútka',
            'Otrokár',
            'Prekupník - presúva ukradnuté alebo nelegálne tovary',
            'Uličný prorok — šialený kňaz hovoriaci o proroctvách záhuby',
            'Žobrácke dieťa',
            'Násilník - svalstvo pre organizovanú zločineckú syndikáciu',
            'Lichvár',
            'Putujúci - „barbarský“ nomád alebo tulák'
        ]]
    ]);

    private static GENDERED_TABLES = new Set([TableType.BodyType, TableType.Disfigured, TableType.InteractionTraits, TableType.PersonalityTraits]);

    public getText( table: TableType, value: number, data?: TextData ): string {
        const text = super.getText(table, value, data);
        if (!TableTranslationSlovak.GENDERED_TABLES.has(table) || !data?.[TableType.Gender])
            return text;

        const isMale = data?.[TableType.Gender] === 2;
        if (isMale)
            return text;
        return text
            .replace(/ý$/, 'á')
            .replace(/i$/, 'a')
            .replace(/y$/, 'a');
    }

    public getStaticText( englishText: string, context?: string ): string {
        switch (englishText) {
            case ' of ':
                return ' - ';
            case 'Appearance:':
                return 'Vzhľad:';
            case 'Behavior:':
                return 'Správanie:';
            case 'with':
                return 's';
            case 'Is':
                return 'Je';
            case 'hair':
                return 'vlasmi';
            case 'and':
                return 'a';
            case 'Wearing':
                return 'Na sebe má';
            case 'accents':
                return 'doplnky';
            case 'with talent in':
                return 's talentom s';
            case 'Work':
                return 'Práca';
        }
        return englishText;
    }

    protected getTranslationTable(): Map<TableType, string[]> {
        return TableTranslationSlovak.TRANSLATION_TABLE;
    }

    protected getIdealTranslation(): Map<Alignment, string[]> {
        return TableTranslationSlovak.IDEAL_TRANSLATION;
    }

    protected getOccupationTranslation(): Map<UrbanRural, string[]> {
        return TableTranslationSlovak.OCCUPATION_TRANSLATION;
    }

    protected getSpecificOccupationTranslation( occupation: Occupation, d20: number, d8: number ): string {
        const table = TableTranslationSlovak.SPECIFIC_OCCUPATION_TRANSLATION.get(occupation);
        if (!table)
            return '';
        return table.length > 8 ? table[d20] : table[d8];
    }

}
