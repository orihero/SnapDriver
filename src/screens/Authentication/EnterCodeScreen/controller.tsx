import React, {useEffect, useState} from 'react';
import EnterCodeView from "./view";
import {StatusBar} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import colors from "@constants/colors";
import IAction from "@store/types/IAction";
import SCREENS from "@constants/screens";


interface IProps {
    route: any
    VerifyCode: IAction;
    ResendCode: IAction
    GetProfile: IAction
}

const EnterCodeScreenController = ({route, VerifyCode, ResendCode, GetProfile}: IProps) => {

    const navigation = useNavigation();
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    const codeFieldRef = useBlurOnFulfill({value, cellCount: 5});
    const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [counter, setCounter] = useState(30);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, [navigation]);

    useEffect(() => {
        if (!counter) return;

        const intervalId = setInterval(() => {
            setCounter(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [counter]);


    const handleSubmit = () => {
        setIsLoading(true);
        const {id} = route.params;
        VerifyCode({
            id,
            code: value
        }, () => {
            GetProfile(null, () => {
                setIsLoading(false);
                navigation.navigate(SCREENS.REGISTER_DRIVER_STACK);
            });
        }, () => {
            setError(true);
            setIsLoading(false);
        });
    };

    const resend = () => {
        const {id} = route.params;
        setCounter(30);
        ResendCode(id, ({data}) => {
            setIsLoading(false);
            setValue('')
        }, (error) => {
            setIsLoading(false);
        })
    };


    return (
        <EnterCodeView
            handleSubmit={handleSubmit}
            codeFieldProps={codeFieldProps}
            getCellOnLayoutHandler={getCellOnLayoutHandler}
            codeFieldRef={codeFieldRef}
            codeFieldValue={value}
            setCodeFieldValue={(text) => {
                setValue(text);
                error && setError(false)
            }}
            isButtonDisabled={value.length < 5}
            counter={counter}
            resend={resend}
            error={error}
            isLoading={isLoading}
        />
    );
};

export default EnterCodeScreenController;
