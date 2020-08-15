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
    },
    innerWrapper: {
        paddingTop: 10,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: colors.grey,
    },
    text: {
        ...constStyles.bold,
        fontSize: 15
    },
    drivingText: {
        fontSize: 14,
        ...constStyles.light,
    },
    dragIcon: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.grayText,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        width: 30,
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        paddingBottom: 20,
        backgroundColor: colors.grey,
    },
    bottomIconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        overflow: 'hidden',
        ...constStyles.shadow,
    },
    optionsWrapper: {
        paddingHorizontal: 15,
        backgroundColor: colors.grey,
    },
    optionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
    },
    img: {
        height: 20,
        width: 14,
        resizeMode: 'contain',
    },
    drivingFromWrapper: {
        marginLeft: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.superPaleGray,
    },
    drivingToWrapper: {
        paddingLeft: 10,
        paddingTop: 5,
    },
    optionText: {
        ...constStyles.bold,
        fontSize: 15,
        marginRight: 'auto',
        marginLeft: 11.5
    },
    imgWrapper: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        color: '#AAAEB7',
        fontSize: 14,
        ...constStyles.light,
    },
    infoWrapper: {
        paddingLeft: 10
    }
})
