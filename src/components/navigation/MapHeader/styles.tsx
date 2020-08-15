import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {BIG_BORDER_RADIUS} from "@constants/values";

export default StyleSheet.create({
    plane: {
        backgroundColor: colors.white,
    },
    container: {
        borderBottomRightRadius: BIG_BORDER_RADIUS,
        borderBottomLeftRadius: BIG_BORDER_RADIUS,
        overflow: 'hidden',
    },
    headerAndInnerHeader: {},
    childrenHeader: {
        backgroundColor: colors.white,
        marginBottom: -20,
        marginTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 68
    },
    titleWrapper: {},
    iconWrapper: {
        overflow: 'hidden',
        position: 'absolute',
        borderRadius: 20,
        left: 15,
    },
    title: {
        fontSize: 18,
        color: colors.black,
    },
    notifyIcon: {
        position: 'absolute',
        bottom: 5,
        right: 6,
    },
});
