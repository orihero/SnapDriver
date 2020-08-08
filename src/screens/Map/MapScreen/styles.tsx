import {StyleSheet} from "react-native";
import {BUTTON_MARGIN_BOTTOM, CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: CONTAINER_PADDING,
        flex: 1,
        justifyContent: 'space-between',
    },

    messageWrapper: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: BUTTON_MARGIN_BOTTOM,
    },
    tariffWrapper: {
        position: 'absolute',
        marginTop: 200,
        left: -1000,
    },
});
