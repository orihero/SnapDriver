import React, {useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import colors from '../../constants/colors';
import images from '../../assets/images';
import strings from '../../locales/strings';
import constStyles from '../../constants/constStyles';
import SelectCard from '../../components/cards/SelectCard';
import RectangleButton from '../../components/common/RectangleButton';
import {CONTAINER_PADDING} from '../../constants/values';

interface LanguageSelectProps {
    navigation: any;
}

const LanguageSelect = ({navigation}: LanguageSelectProps) => {
    const onPress = () => {
        navigation.navigate('EnterCode');
    };

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={images.logoBlue} style={styles.logoImage} />
                <Text style={[styles.title, constStyles.bold]}>
                    {strings.earnMoneyWithUs}
                </Text>
            </View>
            <View style={styles.middle}>
                <Image source={images.driverCar} style={styles.driverImage} />
            </View>
            <View style={styles.bottom}>
                <SelectCard name={strings.language} value={strings.russian} />
                <View style={styles.buttonWrapper}>
                    <RectangleButton
                        textColor={colors.black}
                        text={strings.register}
                        backColor={colors.yellow}
                        onPress={onPress}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={[styles.bottomText, constStyles.semibold]}>
                        {strings.alreadyHaveAccount}
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={[styles.bottomColorText, constStyles.bold]}>
                            {strings.login}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: CONTAINER_PADDING,
        flex: 1,
    },
    top: {
        padding: 40,
        paddingBottom: 15,
        alignItems: 'center',
    },
    title: {
        paddingVertical: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    logoImage: {
        height: 80,
        width: 185,
        resizeMode: 'contain',
    },
    middle: {
        alignItems: 'center',
    },
    driverImage: {
        height: 230,
        width: 300,
        resizeMode: 'contain',
    },
    bottom: {
        paddingTop: 40,
    },
    buttonWrapper: {
        paddingVertical: 40,
        paddingHorizontal: 25,
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        fontSize: 14,
        paddingRight: 20,
    },
    bottomColorText: {
        fontSize: 16,
        color: colors.blue,
    },
});

export default LanguageSelect;
