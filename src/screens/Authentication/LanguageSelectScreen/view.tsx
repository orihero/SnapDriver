import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import images from '@assets/images';
import strings from '@constants/strings';
import constStyles from '@constants/constStyles';
import SelectCard from '@components/cards/SelectCard';
import styles from "./styles";
import Button from "@components/common/Button";

interface IProps {
    onPress: () => void;
}

const LanguageSelectView = ({onPress}: IProps) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.top}>
                    <Image source={images.logoBlue} style={styles.logoImage}/>
                    <Text style={[styles.title, constStyles.bold]}>
                        {strings.earnMoneyWithUs}
                    </Text>
                </View>
                <View style={styles.middle}>
                    <Image
                        source={images.driverCar}
                        style={styles.driverImage}
                    />
                </View>
            </View>
            <View style={styles.bottom}>
                <SelectCard name={strings.language} value={strings.russian}/>
                <View style={styles.buttonWrapper}>
                    <Button
                        text={strings.login}
                        onPress={onPress}
                    />
                </View>
                {/*<View style={styles.textWrapper}>*/}
                {/*    <Text style={[styles.bottomText, constStyles.semibold]}>*/}
                {/*        {strings.alreadyHaveAccount}*/}
                {/*    </Text>*/}
                {/*    <TouchableOpacity>*/}
                {/*        <Text*/}
                {/*            style={[styles.bottomColorText, constStyles.bold]}>*/}
                {/*            {strings.login}*/}
                {/*        </Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        </View>
    );
};

export default LanguageSelectView;
