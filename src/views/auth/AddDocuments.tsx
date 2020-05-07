import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BUTTON_MARGIN_BOTTOM, CONTAINER_PADDING} from '../../constants/values';
import AttachmentCard from '../../components/cards/AttachmentCard';
import colors from '../../constants/colors';
import strings from '../../locales/strings';
import constStyle from '../../constants/constStyles';
import RectangleButton from '../../components/common/RectangleButton';

interface AddDocumentsProps {
    navigation: any;
}

const AddDocuments = ({navigation}: AddDocumentsProps) => {
    //functions
    const onPress = () => {
        navigation.navigate('AddCar');
    };
    return (
        <View style={styles.container}>
            <AttachmentCard
                title={strings.techPassport || ''}
                icon="camera"
                name={strings.takePhoto || ''}
                textColor={colors.darkGrayText}
            />
            <AttachmentCard
                title={strings.license || ''}
                textColor={colors.darkGrayText}
                icon="attachment"
                name={strings.takePhotoAndAttach || ''}
            />
            <AttachmentCard
                title={strings.passport || ''}
                textColor={colors.darkGrayText}
                icon="facePhoto"
                name={strings.pictureSide || ''}
            />
            <AttachmentCard
                title={strings.passport || ''}
                textColor={colors.blue}
                // icon="tick"
                customIcon="tick"
                name={strings.residenceSide || ''}
            />
            <View style={styles.footer}>
                <View style={styles.footerWrapper}>
                    <Text style={[constStyle.medium, styles.firstFooter]}>
                        {strings.privacyPoliceFirst}
                    </Text>
                    <TouchableOpacity>
                        <Text style={[constStyle.bold, styles.secondFooter]}>
                            {strings.privacyPoliceSecond}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonWrapper}>
                    <RectangleButton
                        onPress={onPress}
                        backColor={colors.yellow}
                        text={strings.further}
                        textColor={colors.black}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingHorizontal: CONTAINER_PADDING,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    footerWrapper: {
        paddingTop: 120,
    },
    firstFooter: {
        textAlign: 'center',
        fontSize: 13,
        color: colors.darkGrayText,
    },
    secondFooter: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.blue,
    },
    buttonWrapper: {
        marginBottom: BUTTON_MARGIN_BOTTOM,
    },
});

export default AddDocuments;
