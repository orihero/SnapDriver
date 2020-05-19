import React from 'react';
import {Switch} from 'react-native';
import colors from '../../constants/colors';

interface CustomSwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}

let CustomSwitch = ({value, onValueChange}: CustomSwitchProps) => (
    <Switch
        trackColor={{false: '#ECECEC', true: '#ECECEC'}}
        thumbColor={value ? colors.blue : '#ECECEC'}
        style={{marginLeft: 'auto'}}
        value={value}
        onValueChange={onValueChange}
    />
);

export default CustomSwitch;
