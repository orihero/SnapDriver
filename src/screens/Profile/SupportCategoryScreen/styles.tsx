import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import constStyles from "@constants/constStyles";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    textarea: {
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: colors.grey,
        height: 126,
        marginTop: 13,
        marginBottom: 40
    },
    attachFile: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 6,
        backgroundColor: colors.grey,
        alignItems: 'center',
        paddingHorizontal: 17,
        borderRadius: 10,
        marginBottom: 50,
        borderBottomStartRadius: 0
    },
    border: {
        position: 'absolute',
        bottom: 0,
        width: '80%',
        height: 3,
        backgroundColor: colors.blue,
        borderRadius: 10
    },
    attachFileText: {
        fontSize: 15,
        marginBottom: 10,
        color: colors.darkGrayText,
    },
    download: {
        color: '#858585',
        ...constStyles.semibold
    },
    title: {
        fontSize: 16,
        color: '#646974',
        marginBottom: 20
    },
    comment: {
        fontSize: 16,
        ...constStyles.bold
    }
});
