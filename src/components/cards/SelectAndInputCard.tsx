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

interface SelectAndInputCardProps {
    title: string;
    titleVisible?: boolean;
    value: string;
    values?: [];
    icon: string;
    placeholder: string;
    isInputNumber: boolean;
    setInputScreen?: any;
    setKeyboardOn?: any;
}

const SelectAndInputCard = ({
    value,
    values,
    icon,
    placeholder,
    isInputNumber,
    title,
    titleVisible,
    setInputScreen,
    setKeyboardOn,
}: SelectAndInputCardProps) => {
    let [showTitle, setShowTitle] = useState(
        !!titleVisible ? titleVisible : false,
    );

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {showTitle && <Text style={styles.title}>{title}</Text>}
            <View style={[styles.contentWrapper, constStyles.shadow]}>
                <Icon name={icon} style={styles.icon} size={25} />
                <Text style={styles.value}>{value}</Text>
                <Icon name="angleUp" color={colors.grayText} />
                <TextInput
                    onFocus={() => {
                        if (!titleVisible) {
                            setShowTitle(true);
                            setInputScreen(true);
                        }
                    }}
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
