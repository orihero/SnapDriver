import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import strings from '../../locales/strings';
import CustomSwitch from '../../components/common/CustomSwitch';
import Icon from '../../assets/icons';
import colors from '../../constants/colors';
import {CONTAINER_PADDING} from '../../constants/values';
import constStyles from '../../constants/constStyles';

interface SettingsProps {}

const Settings = ({}: SettingsProps) => {
    let [darkMode, setDarkMode] = useState(false);
    return (
        <View style={styles.container}>
            <View style={[styles.bar, styles.bottomBorder]}>
                <Text
                    style={[
                        styles.text,
                        constStyles.bold,
                        {
                            color: darkMode ? colors.blue : colors.black,
                        },
                    ]}>
                    {!darkMode
                        ? strings.switchDarkMode
                        : strings.switchLightMode}
                </Text>
                <CustomSwitch
                    value={darkMode}
                    onValueChange={() => {
                        setDarkMode(!darkMode);
                    }}
                />
            </View>
            <View style={styles.bar}>
                <Text style={[styles.text, constStyles.bold]}>
                    {strings.appLanguage}
                </Text>
                <Icon name="angleRight" size={10} style={{paddingRight: 15}} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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

export default Settings;
