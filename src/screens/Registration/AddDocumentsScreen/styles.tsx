import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imagesWrapper: {
        justifyContent: 'space-between',
        margin: 10,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    footerWrapper: {
        // paddingTop: 40,
        paddingBottom: 10,
    },
    firstFooter: {
        textAlign: 'center',
        fontSize: 13,
        color: colors.darkGrayText,
    },
    secondFooter: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.blue,
    },
    buttonWrapper: {padding: CONTAINER_PADDING, paddingTop: 0},
});
