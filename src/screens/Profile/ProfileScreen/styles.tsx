import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    profileWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    avatar: {
        padding: 5,
    },
    verticalWrapper: {
        paddingTop: 20,
        paddingLeft: 15,
    },
    imagesWrapper: {
        justifyContent: 'space-between',
        margin: 10,
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
    buttonWrapper: {
        padding: CONTAINER_PADDING,
        paddingTop: 0,
    },
});
