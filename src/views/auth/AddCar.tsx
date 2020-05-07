import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {CONTAINER_PADDING, BUTTON_MARGIN_BOTTOM} from '../../constants/values';
import strings from '../../locales/strings';
import RectangleButton from '../../components/common/RectangleButton';
import {NavigationScreenProp} from 'react-navigation';
import SelectOrInputCard from '../../components/cards/SelectOrInputCard';

interface AddCarProps {
    navigation: NavigationScreenProp<{}>;
}

const AddCar = ({navigation}: AddCarProps) => {
    //function
    const onPress = () => {
        navigation.navigate('MapPage');
    };
    return (
        <View style={styles.container}>
            <SelectOrInputCard
                secondaryIcon="angleUp"
                title={strings.carType || ''}
                placeholder={strings.selectCarType || ''}
                isSelect
            />
            <SelectOrInputCard
                title={strings.carMaker || ''}
                placeholder={strings.enterCarMaker || ''}
            />
            <SelectOrInputCard
                title={strings.carModel || ''}
                placeholder={strings.enterCarModel || ''}
            />
            <SelectOrInputCard
                title={strings.stateNumber || ''}
                placeholder={strings.enterStateNumber || ''}
                textColor={colors.blue}
            />
            <SelectOrInputCard
                title={strings.selectColor || ''}
                placeholder={strings.selectCarColor || ''}
            />
            <SelectOrInputCard
                secondaryIcon="angleUp"
                title={strings.carType || ''}
                placeholder={strings.selectCarType || ''}
                isSelect
            />
            <View style={styles.footer}>
                <View style={{flex: 1}} />
                <View style={styles.buttonWrapper}>
                    <RectangleButton
                        onPress={onPress}
                        backColor={colors.yellow}
                        text={strings.further}
                        textColor={colors.black}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: CONTAINER_PADDING,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        marginBottom: BUTTON_MARGIN_BOTTOM,
    },
});

export default AddCar;
