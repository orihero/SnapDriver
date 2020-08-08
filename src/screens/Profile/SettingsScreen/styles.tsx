import {StyleSheet} from "react-native";
import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    bottomBorder: {
        borderBottomColor: colors.paleGray,
        borderBottomWidth: 0.5,
    },
});
