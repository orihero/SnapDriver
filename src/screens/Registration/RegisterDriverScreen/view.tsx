import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView, TextInput,
} from 'react-native';
import Avatar from '@components/common/Avatar';
import {CONTAINER_PADDING} from '@constants/values';
import strings from '@constants/strings';
import InputCard from '@components/cards/InputCard';
import SelectAndInputCard from '@components/cards/SelectAndInputCard';
import SelectOrInputCard from '@components/cards/SelectOrInputCard';
import Button from '@components/common/Button';
import constStyle from '@constants/constStyles';
import styles from "./styles";

interface RegisterDriverProps {
    setLastName: (text: string) => void;
    setName: (text: string) => void;
    lastName: string;
    name: string;
    handleSubmit: () => void;
    isLoading: boolean;
    isButtonDisabled: boolean;
    avatar: object;
    setAvatar: (avatar: any) => void;
}

const RegisterDriverScreenView = (
    {
        lastName,
        name,
        handleSubmit,
        setLastName,
        setName,
        isLoading,
        isButtonDisabled,
        avatar,
        setAvatar,
    }: RegisterDriverProps) => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: CONTAINER_PADDING,
                    justifyContent: 'space-between',
                }}>
                <View style={styles.profileWrapper}>
                    <Avatar
                        avatar={avatar}
                        setAvatar={setAvatar}
                        style={styles.avatar}
                    />
                    <View style={styles.verticalWrapper}>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>{strings.name}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={strings.enterYourName}
                                onChangeText={(text) => setName(text)}
                                value={name}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>{strings.familyName}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={strings.enterYourFamilyName}
                                onChangeText={(text) => setLastName(text)}
                                value={lastName}
                            />
                        </View>
                    </View>
                </View>
                {/*<SelectOrInputCard*/}
                {/*    icon="smartphone"*/}
                {/*    placeholder={strings.enterYourNumber || ''}*/}
                {/*    title={strings.enterYourNumber || ''}*/}
                {/*/>*/}
                {/*<SelectOrInputCard*/}
                {/*    icon="listPen"*/}
                {/*    title={strings.yourResidence || ''}*/}
                {/*    placeholder={strings.addressResidence || ''}*/}
                {/*/>*/}
                {/*<SelectOrInputCard*/}
                {/*    isPassword*/}
                {/*    icon="passwordChecked"*/}
                {/*    title={strings.yourPassword || ''}*/}
                {/*    placeholder={strings.enterYourPassword || ''}*/}
                {/*/>*/}
            </ScrollView>
            <View style={styles.footerWrapper}>
                <Text style={[constStyle.medium, styles.firstFooter]}>
                    {strings.continueRegister}
                </Text>
                <TouchableOpacity>
                    <Text style={[constStyle.bold, styles.secondFooter]}>
                        {strings.privacyPoliceSecond}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
                <Button
                    isLoading={isLoading}
                    onPress={handleSubmit}
                    text={strings.further}
                    disabled={isButtonDisabled}
                />
            </View>
        </View>
    );
};

export default RegisterDriverScreenView;
