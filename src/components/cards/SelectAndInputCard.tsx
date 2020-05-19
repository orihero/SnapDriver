import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    LayoutAnimation,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';
import constStyles from '../../constants/constStyles';
import colors from '../../constants/colors';
import Icon from '../../assets/icons';
import {BORDER_RADIUS} from '../../constants/values';
import RNPickerSelect from 'react-native-picker-select';

interface SelectAndInputCardProps {
    title: string;
    titleVisible?: boolean;
    selectValue: string;
    values?: [];
    icon: string;
    placeholder: string;
    isInputNumber: boolean;
    setInputScreen?: any;
    setKeyboardOn?: any;
    selectOptions: any;
    selectedOption?: string;
    preValue?: string;
}

const SelectAndInputCard = ({
    selectValue,
    // values,
    icon,
    placeholder,
    isInputNumber,
    title,
    titleVisible,
    setInputScreen,
    setKeyboardOn,
    selectOptions,
    selectedOption,
    preValue,
}: SelectAndInputCardProps) => {
    let [showTitle, setShowTitle] = useState(
        !!titleVisible ? titleVisible : false,
    );

    let [selected, setSelected] = useState(selectedOption);
    let [value, setValue] = useState(preValue && preValue);
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {showTitle && <Text style={styles.title}>{title}</Text>}
            <View style={[styles.contentWrapper, constStyles.shadow]}>
                <RNPickerSelect
                    onValueChange={(value) => setSelected(value)}
                    items={selectOptions || []}
                    Icon={() => <View />}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Icon name={icon} style={styles.icon} size={25} />
                        <Text style={styles.value}>
                            {selectValue}
                            {selected}
                        </Text>
                        <Icon name="angleUp" color={colors.grayText} />
                    </View>
                </RNPickerSelect>
                <TextInput
                    onFocus={() => {
                        if (!titleVisible) {
                            setShowTitle(true);
                            setInputScreen(true);
                        }
                    }}
                    onChangeText={(text) => setValue(text)}
                    value={value}
                    style={styles.input}
                    placeholder={placeholder}
                    numberOfLines={1}
                    keyboardType={isInputNumber ? 'numeric' : 'default'}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: colors.white,
    },
    contentWrapper: {
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        paddingBottom: 5,
        color: colors.darkGrayText,
        fontSize: 15,
    },
    icon: {
        paddingRight: 10,
    },
    value: {
        paddingLeft: 10,
    },
    input: {
        paddingLeft: 10,
        paddingVertical: 0,
    },
});

export default SelectAndInputCard;
