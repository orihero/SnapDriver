import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING} from "@constants/values";
import {constStyles} from "@constants/index";

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
        flex: 1,
        paddingLeft: 15,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    footerWrapper: {
        paddingBottom: CONTAINER_PADDING,
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
        color: colors.blue,
    },
    buttonWrapper: {
        padding: CONTAINER_PADDING,
    },
    inputWrapper: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EAECF1',
        marginBottom: 10
    },
    label: {
        ...constStyles.light,
        // marginBottom: -10,
    },
    input: {
        padding: 0,
        fontSize: 17,
    },



});
