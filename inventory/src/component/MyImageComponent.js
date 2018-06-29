/**
 * Created by nick on 2017/4/20.
 */
import { createElement,Component } from "rax";

import Picture from 'rax-picture';
/**
 *
 *
 <MyImage
 key={`productImages_${tool.hashcode(uri)}`}
 style={{ height : 50, width : 50 }}
 source={sourceImg}/>
 */
let image = '//camo.githubusercontent.com/27b9253de7b03a5e69a7c07b0bc1950c4976a5c2/68747470733a2f2f67772e616c6963646e2e636f6d2f4c312f3436312f312f343031333762363461623733613132336537386438323436636438316338333739333538633939395f343030783430302e6a7067';
export default class MyImageComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {
            source,
            style,
        } = this.props;

        let view;
        view = (
            <Picture
                source={source}
                style={style}
                resizeMode="cover"
                lazyload={true}
                autoWebp={false}
                autoCompress={false}
                autoRemoveScheme={false}
                autoReplaceDomain={false}
                autoScaling={false}
                highQuality={false}
            />
        );

        return (view);
    }
}

