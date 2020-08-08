import {StyleSheet} from "react-native";
import colors from "@constants/colors";

export default StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        marginTop: 'auto',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: colors.yellow,
        width: '100%',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    disabled: {
        backgroundColor: colors.paleGray
    },
    disabledText: {
        color: colors.white
    },
    text: {
        fontSize: 14,
        color: '#2A1E06',
    }
});
