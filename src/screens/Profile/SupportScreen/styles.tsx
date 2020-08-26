import {StyleSheet} from "react-native";
import {colors} from "@constants/index";

export default StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
        marginTop: -44
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.darkGray
    }
});
