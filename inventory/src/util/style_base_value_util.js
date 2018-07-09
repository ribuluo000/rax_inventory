import color from "./color_util";

/**
 * Author: 00天火00
 * Email: tianhuo@thuol.com
 * Date: 2018/5/15
 * Time: 上午11:14
 */
const transparentColor = 'transparent';

export default {
    ...color,

    fontSizeXXL : '98rem',
    fontSizeXL : '56rem',
    fontSizeL : '36rem',
    fontSizeM : '28rem',
    fontSizeS : '24rem',
    fontSizeXS : '20rem',
    fontSizeXXS : '8rem',

    sizeXXL : '40rem',
    sizeXL : '36rem',
    sizeL : '30rem',
    sizeM : '26rem',
    sizeS : '20rem',
    sizeXS : '16rem',
    sizeXXS : '10rem',
    size5 : '5rem',

    borderSizeXXL : '20rem',
    borderSizeXL : '16rem',
    borderSizeL : '8rem',
    borderSizeM : '4rem',
    borderSizeS : '2rem',
    borderSizeXS : '1rem',
    borderSizeXXS : '1rem',
    borderSizeNone : '0rem',

    borderRadiusSizeXXL : '20000rem',
    borderRadiusSizeXL : '16rem',
    borderRadiusSizeL : '8rem',
    borderRadiusSizeM : '6rem',
    borderRadiusSizeS : '4rem',
    borderRadiusSizeXS : '3rem',
    borderRadiusSizeXXS : '2rem',
    borderRadiusNone : '0rem',

    //边框色
    borderColor : color.grey.color6,        //灰
    borderColorGray : color.grey.color6,    //灰
    borderColorGreen : color.green.color6,    //绿

    // 字体色
    textColorBlack : color.grey.color10,    //黑
    textColorGray : color.grey.color7,      //灰
    textColorWhite : color.grey.color1,     //白
    textColorOrange : color.orange.color6,     //橙
    textColorBlue : color.blue.color7,     //蓝
    textColorYellow : color.yellow.color6,     //黄

    // 背景色
    backgroundColorGray : color.grey.color4, //灰
    backgroundColorWhite : color.grey.color1, //白
    backgroundColorBlack : color.grey.color9, //黑
    backgroundColorGreen : color.green.color6, //绿
    backgroundColorOrange : color.orange.color6, //橙
    backgroundColorBlue : color.blue.color5, //蓝
    backgroundColorRed : color.red.color5, //红
    backgroundColorYellow : color.yellow.color1, //黄

    backgroundColorBlue_active : color.blue.color4, //蓝

    backgroundColorTransparent : transparentColor,
    backgroundColorContainer : color.grey.color4,

    /***********天火*********/
    //按钮大小
    btnHeightXXL : '50rem',
    btnHeightXL : '46rem',
    btnHeightL : '40rem',
    btnHeightM : '36rem',
    btnHeightS : '30rem',
    btnHeightXS : '26rem',

    /***********天火结束*********/


    heightMyLabelExtraComponent:'100rem',
    /**
     * 默认分隔线颜色和大小
     */
    commonSeparatorHeight__Immutable__:'1rem',
    commonSeparatorColor:color.grey.color5,

    /**
     * 默认 Header 背景颜色和大小
     */
    heightHeader:'80rem',
    backgroundColorHeader:color.blue.color5,
    textColorHeaderCenter : color.grey.color1,     //白
    textAlignHeaderCenter : 'center',     //居中
    fontSizeHeaderCenter : '36rem',     //XL
};

