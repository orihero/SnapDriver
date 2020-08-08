import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {constStyles} from "@constants/index";

export default StyleSheet.create({
    container: {
        paddingVertical: 34,
        backgroundColor: colors.blue,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginBottom: 35,
        zIndex: -1
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        ...constStyles.bold,
        fontWeight: 'bold'
    },
    backButton: {
        backgroundColor: colors.white,
        position: 'absolute',
        left: 16,
        height: 42,
        width: 42,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
