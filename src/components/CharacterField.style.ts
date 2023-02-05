import { StylesConfig } from 'react-select';
import { CharacterFieldOption } from './CharacterField';
import { Color } from '../data/TableType';


const colorToCss = ( color: Color ) => {
    switch (color) {
        case Color.White:
            return '#fff';
        case Color.Black:
            return '#000';
        case Color.PlatinumBlonde:
            return '#fcf9cd';
        case Color.GoldenBlonde:
            return '#fbf0a2';
        case Color.CopperBlonde:
            return '#fdb85e';
        case Color.Flaxen:
            return '#e1c837';
        case Color.AshBrown:
            return '#d39d5d';
        case Color.LightBrown:
            return '#b28a50';
        case Color.MouseBrown:
            return '#674b30';
        case Color.DarkBrown:
            return '#35302e';
        case Color.BlackBrown:
            return '#3c0906';
        case Color.RavinBlack:
            return '#0b0302';
        case Color.Mahogany:
            return '#3a0a09';
        case Color.AuburnBrown:
            return '#5d0d0a';
        case Color.CherryBrown:
            return '#7f1710';
        case Color.CopperBrown:
            return '#801c15';
        case Color.Auburn:
            return '#a41915';
        case Color.Burgandy:
            return '#c1261f';
        case Color.CherryRed:
            return '#d82924';
        case Color.FoxRed:
            return '#ea351d';
        case Color.GignerRed:
            return '#f65702';
        case Color.StormGrey:
            return '#52474c';
        case Color.LightGrey:
            return '#a99699';
        case Color.ChesnutBrown:
            return '#7a464f';
        case Color.WalnutBrown:
            return '#562e37';
        case Color.RussetBrown:
            return '#801627';
        case Color.Burgundy:
            return '#881158';
        case Color.Rose:
            return '#c60676';
        case Color.Fuchsia:
            return '#fd00b3';
        case Color.Violet:
            return '#8f01fa';
        case Color.RoyaleBlue:
            return '#500bf4';
        case Color.SkyBlue:
            return '#0076fa';
        case Color.Teal:
            return '#1da2db';
        case Color.PineGreen:
            return '#57835e';
        case Color.BrightGreen:
            return '#00bc16';
        case Color.PaleGreen:
            return '#7eba83';
        case Color.LimeGreen:
            return '#d9d62a';
        case Color.Yellow:
            return '#fde201';
        case Color.Orange:
            return '#ef8713';
        case Color.Red:
            return '#db262c';
        case Color.ClayGreen:
            return '#acb4b3';
        case Color.OliveDrab:
            return '#546666';
        case Color.Amber:
            return 'linear-gradient(315deg, #F26401FF 0%, #f6d501 35%, #fff 100%)';
        case Color.Gold:
            return 'linear-gradient(315deg, #FDED01FF 0%, #FDF9C2FF 35%, #F7A308FF 100%)';
        case Color.Silver:
            return 'linear-gradient(315deg, #E9E9EAFF 0%, #7B7B7CFF 35%, #CBC9C9FF 100%)';
        case Color.Jade:
            return 'linear-gradient(315deg, #128E2CFF 0%, #72ECA7FF 35%, #DDFAF0FF 100%)';
        case Color.Bronze:
            return 'linear-gradient(315deg, #AF6841FF 0%, #661403FF 35%, #C6633EFF 100%)';
        case Color.Copper:
            return 'linear-gradient(315deg, #F78C33FF 0%, #BB1301FF 35%, #F2981CFF 100%)';
        case Color.Emerald:
            return 'linear-gradient(315deg, #10240BFF 0%, #2EB803FF 35%, #F8F8E0FF 100%)';
        case Color.VibrantGreen:
            return '#a9f101';
        case Color.Tangerine:
            return '#fd8207';
        case Color.PepperRed:
            return '#d75f2c';
        case Color.PastelBlue:
            return '#7d94c5';
        case Color.Ruby:
            return 'linear-gradient(315deg, #D3002BFF 0%, #E11553FF 35%, #FDCEF4FF 100%)';
        case Color.Lavander:
            return '#cca2cd';
        case Color.Saphire:
            return 'linear-gradient(315deg, #0334C1FF 0%, #0119F9FF 35%, #0DF1FEFF 100%)';
        case Color.Azure:
            return '#0052a4';
        case Color.Cyan:
            return '#04aaef';
        case Color.Turquoise:
            return 'linear-gradient(315deg, #06939AFF 0%, #1FD7D5FF 35%, #EEFCFDFF 100%)';
    }
    return '#76c94c';
}

const dot = ( color?: Color ) => (color !== undefined ? {
    alignItems: 'center',
    display: 'flex',

    ':before': {
        background: colorToCss(color),
        border: '2px solid black',
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
} : {});

export const characterFieldSelectStyles: StylesConfig<CharacterFieldOption> = {
    container: ( baseStyles ) => ({
        ...baseStyles,
        display: 'inline-block'
    }),
    control: ( baseStyles, state ) => ({
        ...baseStyles,
        width: `${state.getValue()[0].label.length + 2}em`
    }),
    menu: ( baseStyles, state ) => ({
        ...baseStyles,
        width: `${state.getValue()[0].label.length + 2}em`
    }),
    singleValue: ( styles, {data} ) => ({...styles, ...dot(data.color)}),
    option: ( styles, {data} ) => ({...styles, ...dot(data.color)})
};
