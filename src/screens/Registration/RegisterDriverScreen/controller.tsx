import React, {useState} from 'react';
import RegisterDriverScreenView from "./view";
import {StackNavigationProp} from "@react-navigation/stack";
import IAction from "@store/types/IAction";
import {constructFileFromUri, formData} from "@store/utils";

interface IProps {
    navigation: StackNavigationProp<any>;
    UpdateProfile: IAction;
}

const RegisterDriverScreenController = ({navigation, UpdateProfile}: IProps) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatar, setAvatar] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        UpdateProfile(formData({
                name: (name.trim() + ' ' + lastName.trim()),
                avatar: constructFileFromUri(avatar)
            }), () => {
                setIsLoading(false);
            }, () => {
                setIsLoading(false);
            }
        )
    };

    return (
        <RegisterDriverScreenView
            setLastName={setLastName}
            setName={setName}
            lastName={lastName}
            name={name}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isButtonDisabled={!(name.length > 0 && lastName.length > 0)}
            setAvatar={setAvatar}
            avatar={avatar}
        />
    );
};

export default RegisterDriverScreenController;
