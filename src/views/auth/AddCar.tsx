import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {CONTAINER_PADDING, BUTTON_MARGIN_BOTTOM} from '../../constants/values';
import strings from '../../locales/strings';
import RectangleButton from '../../components/common/RectangleButton';
import {NavigationScreenProp} from 'react-navigation';
import SelectOrInputCard from '../../components/cards/SelectOrInputCard';
import {ScrollView} from 'react-native-gesture-handler';

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingHorizontal: CONTAINER_PADDING,
                    paddingBottom: 20,
                }}>
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
            </ScrollView>
            {/* <View style={styles.footer}> */}
            <View style={styles.buttonWrapper}>
                <RectangleButton
                    onPress={onPress}
                    backColor={colors.yellow}
                    text={strings.further}
                    textColor={colors.black}
                />
            </View>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        padding: CONTAINER_PADDING,
    },
});

export default AddCar;
