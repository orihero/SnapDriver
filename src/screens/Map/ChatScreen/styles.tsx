import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    chatArea: {
        paddingHorizontal: CONTAINER_PADDING,
    },
    inputWrapper: {
        marginBottom: CONTAINER_PADDING,
        paddingHorizontal: CONTAINER_PADDING,
    },
});
