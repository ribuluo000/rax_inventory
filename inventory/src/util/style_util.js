/**
 * Created by nick on 2018/6/28.
 */
import style_base_value_util from './style_base_value_util';
import my_screen_util from "./my_screen_util";
export default {
    style_base_value_util,
    common_container : {
        padding : '40rem',
        backgroundColor:'#ffffff',

    },
    common_ScrollView : {
        flex: 1,
        paddingTop: '20rem',
        paddingBottom: '30rem',
        height:my_screen_util.get_screen_height(),
        backgroundColor:style_base_value_util.backgroundColorWhite,
    },

    /**
     * 字体大小
     */
    fontSizeS:{
        fontSize:style_base_value_util.fontSizeS,
    },
    fontSizeM:{
        fontSize:style_base_value_util.fontSizeM,
    },
    fontSizeL:{
        fontSize:style_base_value_util.fontSizeL,
    },

    /**
     * 字体颜色
     */
    textColorBlack:{
        color:style_base_value_util.textColorBlack,
    },
    textColorGray:{
        color:style_base_value_util.textColorGray,
    },
    textColorWhite:{
        color:style_base_value_util.textColorWhite,
    },
    textColorOrange:{
        color:style_base_value_util.textColorOrange,
    },
    textColorBlue:{
        color:style_base_value_util.textColorBlue,
    },
    textColorYellow:{
        color:style_base_value_util.textColorYellow,
    },

    /**
     * 间距大小
     */
    paddingXXS:{
        padding:style_base_value_util.sizeXXS,
    },
    paddingXS:{
        padding:style_base_value_util.sizeXS,
    },
    paddingS:{
        padding:style_base_value_util.sizeS,
    },
    paddingM:{
        padding:style_base_value_util.sizeM,
    },
    paddingL:{
        padding:style_base_value_util.sizeL,
    },

    flex1 : {
        flex : 1,
    },
    textAlignRight : {
        textAlign : 'right',
    },
    textAlignCenter : {
        textAlign : 'center',
    },

    flexWrapWrap : {
        flexWrap : 'wrap',
    },
    flexWrapNowrap : {
        flexWrap : 'nowrap',
    },
    flexDirectionRow : {
        flexDirection : 'row',
    },
    flexDirectionColumn : {
        flexDirection : 'column',
    },

    positionAbsolute : {
        position : 'absolute',
    },
    positionRelative : {
        position : 'relative',
    },
    alignItemsCenter : {
        alignItems : 'center',
    },
    alignItemsStretch : {
        alignItems : 'stretch',
    },
    alignSelfCenter : {
        alignSelf : 'center',
    },
    alignSelfStretch : {
        alignSelf : 'stretch',
    },
    justifyContentCenter : {
        justifyContent : 'center',
    },
    justifyContentSpaceBetween : {
        justifyContent : 'space-between',
    },
    justifyContentSpaceAround : {
        justifyContent : 'space-around',
    },
    overflowHidden : {
        overflow : 'hidden',
    },
    overflowScroll : {
        overflow : 'scroll',
    },

    mRowSpaceBetween : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    mRowSpaceAround : {
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
    mInputDelBorderBottom : {
        borderBottomWidth : 0,
    },

    invisible : {
        display : 'none',
    },
    visible : {
        display : 'flex',
    },

    md:{
        Core : {
            'color-brand1-1' : '#00BBD3',
            'color-brand1-6' : '#1A9CB7',
            'color-brand1-9' : '#0096A6',
            'color-error-3' : '#D50000',
            'color-line1-1' : '#DADADA',
            'color-line1-2' : '#E0E0E0',
            'color-text1-1' : '#9E9E9E',
            ['font-size-title'] : '40rem',
            ['font-size-subhead'] : '32rem',
            ['font-size-body-3'] : '28rem',
            ['font-size-body-2'] : '28rem',
            ['font-size-body-1'] : '28rem',
            ['font-size-caption'] : '24rem',
            ['font-size-footnote'] : '20rem'
        },
        Input : {
            'md-placeholder-height' : '50rem',
            'md-help-margin-top' : '16rem',
            'md-input-height' : '50rem',
            'md-placeholder-font-size' : '28rem',
            'md-input-margin-bottom' : '0rem'
        }
    },


    my_top_view1: {
        marginTop : style_base_value_util.sizeXXS,
        marginBottom : style_base_value_util.sizeXXS,
        fontSize : style_base_value_util.fontSizeXL,
        color : style_base_value_util.textColorBlack,
        textAlign : 'center',
    },

    my_top_view2: {
        marginTop : style_base_value_util.sizeXXS,
        marginBottom : style_base_value_util.sizeXXS,
        fontSize : style_base_value_util.fontSizeL,
        color : style_base_value_util.textColorGray,
        textAlign : 'center',
    },

};