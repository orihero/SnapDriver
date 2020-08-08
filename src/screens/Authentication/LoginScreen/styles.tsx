import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {BORDER_RADIUS, BUTTON_MARGIN_BOTTOM, CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey,
    },
    titleWrapper: {
        padding: 18,
        paddingTop: 30,
        justifyContent: 'center',
    },
    firstTitle: {
        fontSize: 14,
    },
    secondTitle: {
        fontSize: 20,
    },
    cardWrapper: {
        padding: CONTAINER_PADDING,
    },
    footerWrapper: {
        marginTop: 'auto'
    },
    firstFooter: {
        textAlign: 'center',
        fontSize: 13,
        color: colors.darkGrayText,
    },
    secondFooter: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.darkGrayText,
    },
    submitButton: {
        marginTop: 'auto',
        paddingHorizontal: CONTAINER_PADDING,
        marginBottom: BUTTON_MARGIN_BOTTOM,
    },
    mask: {
        color: '#232323',
        fontSize: 16,
        flex: 1
    },
    input: {
        height: 52,
        elevation: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey,
        borderRadius: BORDER_RADIUS,
        borderWidth: 2,
        borderColor: colors.white,
        paddingLeft: 18
    },
    prefix: {
        color: '#232323',
        fontSize: 16,
        marginLeft: 16
    }
});
