import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        padding: CONTAINER_PADDING,
    },
});
