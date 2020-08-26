import * as React from "react"
import Svg, {G, Path} from "react-native-svg"
import colors from "@constants/colors";

function PauseIcon(props: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
            <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 11324">
                <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 11325">
                    <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 11322">
                        <G
                            fill={props.active ? colors.blue : colors.darkGray}
                            data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 11323"
                        >
                            <Path
                                data-name="\u041A\u043E\u043D\u0442\u0443\u0440 13147"
                                d="M27.314 4.686A16 16 0 004.686 27.314 16 16 0 0027.314 4.686zM16 30.125A14.125 14.125 0 1130.125 16 14.141 14.141 0 0116 30.125z"
                            />
                            <Path
                                data-name="\u041A\u043E\u043D\u0442\u0443\u0440 13148"
                                d="M21.679 8.452h-3.938a.985.985 0 00-.984.984v13.127a.984.984 0 00.984.984h3.938a.985.985 0 00.984-.984V9.436a.985.985 0 00-.984-.984zm-.984 13.126h-1.969V10.421h1.969z"
                            />
                            <Path
                                data-name="\u041A\u043E\u043D\u0442\u0443\u0440 13149"
                                d="M14.259 8.452h-3.938a.984.984 0 00-.984.984v13.127a.984.984 0 00.984.984h3.938a.984.984 0 00.984-.984V9.436a.984.984 0 00-.984-.984zm-.984 13.126h-1.969V10.421h1.969z"
                            />
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default PauseIcon;
