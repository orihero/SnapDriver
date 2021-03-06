import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {BORDER_RADIUS} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.transparent,
        justifyContent: 'space-between',
    },
    content: {
        borderRadius: BORDER_RADIUS,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        margin: 10,
        marginBottom: 0,
        padding: 20,
        backgroundColor: colors.white,
    },
});



