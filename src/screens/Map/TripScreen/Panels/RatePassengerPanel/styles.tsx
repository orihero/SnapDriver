import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import constStyles from "@constants/constStyles";

export default StyleSheet.create({
    hatCutOut: {
        width: '100%',
        height: 15,
    },
    wrapper: {
        backgroundColor: colors.grey,
        padding: 15,
        paddingBottom: 20,
        borderWidth: 2,
        borderColor: colors.white,
        borderTopWidth: 0,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
    },
    text: {
        ...constStyles.bold,
        fontSize: 15
    },
    topTextWrapper: {
        alignItems: 'center'
    },
    howWasTrip: {
        fontSize: 18,
        ...constStyles.bold,
        marginBottom: 10
    },
    rateTrip: {
        ...constStyles.light,
        fontSize: 14,
        color: '#646974',
        textAlign: 'center',
        marginBottom: 23.6
    },
    startContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 19.6,
        marginBottom: 16,
    },
    textarea: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: colors.grey,
        height: 126,
        marginBottom: 46
    },
})
