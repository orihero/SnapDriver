import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import constStyles from '../../constants/constStyles';

interface InputCardProps {
    title: string;
    placeholder: string;
}

const InputCard = ({title, placeholder}: InputCardProps) => {
    return (
        <View style={styles.contianer}>
            <Text style={[styles.title, constStyles.light]}>{title}</Text>
            <TextInput placeholder={placeholder} style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    contianer: {
        paddingBottom: 10,
    },
    title: {
        fontSize: 14,
        // height: 15,
    },
    input: {
        fontSize: 17,
        padding: 1,
    },
});

export default InputCard;
