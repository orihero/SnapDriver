import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import colors from '../../constants/colors';
import {CONTAINER_PADDING, BUTTON_MARGIN_BOTTOM} from '../../constants/values';
import strings from '../../locales/strings';
import RectangleButton from '../../components/common/RectangleButton';
import {NavigationScreenProp} from 'react-navigation';
import SelectOrInputCard from '../../components/cards/SelectOrInputCard';
import RNPickerSelect from 'react-native-picker-select';

interface AddCarProps {
    navigation: NavigationScreenProp<{}>;
}

const AddCar = ({navigation}: AddCarProps) => {
    //function
    const onPress = () => {
        navigation.navigate('MapPage');
    };

    let [carType, setCarType] = useState('');
    let [carColor, setCarColor] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingHorizontal: CONTAINER_PADDING,
                    paddingBottom: 20,
                }}>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        {label: 'Ferrari', value: 'ferrari'},
                        {label: 'Ferrari', value: 'ferrari'},
                        {label: 'Ferrari', value: 'ferrari'},
                    ]}>
                    <SelectOrInputCard
                        secondaryIcon="angleUp"
                        title={strings.carType || ''}
                        placeholder={strings.selectCarType || ''}
                        isSelect
                    />
                </RNPickerSelect>
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
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        {label: 'Red', value: 'Red'},
                        {label: 'Blue', value: 'baseball'},
                        {label: 'Dark', value: 'hockey'},
                    ]}>
                    <SelectOrInputCard
                        title={strings.selectColor || ''}
                        secondaryIcon="angleUp"
                        isSelect
                        placeholder={strings.selectCarColor || ''}
                    />
                </RNPickerSelect>
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
