import React, {useState} from 'react';
import {
    View,
    ScrollView,
    FlatList,
} from 'react-native';
import {CONTAINER_PADDING} from '@constants/values';
import AttachmentCard from '@components/cards/AttachmentCard';
import colors from '@constants/colors';
import strings from '@constants/strings';
import Button from '@components/common/Button';
import ImagePicker from 'react-native-image-picker';
import ImageCard from '@components/cards/ImageCard';

import styles from "./styles";

interface AddDocumentsProps {
    navigation: any;
}

const AddDocumentsScreenView = ({navigation}: AddDocumentsProps) => {
    //functions
    const onPress = () => {
        navigation.navigate('AddCar');
    };

    const onCameraPress = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response: any) => {
            if (response.uri) {
                setPhoto(response);
                setPhotoDone(true);
            }
        });
    };

    const onLicensePress = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response: any) => {
            if (response.uri) {
                setLicense(response);
                setLicenseDone(true);
            }
        });
    };

    const onPassportFrontPress = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.uri) {
                setPassportFront(response);
                setPassportFrontDone(true);
            }
        });
    };

    const onPassportBackPress = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.uri) {
                setPassportBack(response);
                setPassportBackDone(true);
            }
        });
    };

    //variables
    let [photo, setPhoto] = useState(null);
    let [photoDone, setPhotoDone] = useState(false);

    let [license, setLicense] = useState(null);
    let [licenseDone, setLicenseDone] = useState(false);

    let [passportFront, setPassportFront] = useState(null);
    let [passportFrontDone, setPassportFrontDone] = useState(false);

    let [passportBack, setPassportBack] = useState(null);
    let [passportBackDone, setPassportBackDone] = useState(false);

    let photoList = [
        {id: '1', title: strings.techPassport, photo: photo},
        {id: '2', title: strings.license, photo: license},
        {id: '3', title: strings.passport, photo: passportFront},
        {id: '4', title: strings.passport, photo: passportBack},
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: CONTAINER_PADDING,
                    justifyContent: 'space-between',
                }}>
                <View style={{paddingTop: 20}}>
                    <AttachmentCard
                        title={strings.techPassport || ''}
                        icon="camera"
                        name={strings.takePhoto || ''}
                        textColor={colors.darkGrayText}
                        onPress={onCameraPress}
                        done={photoDone}
                    />
                    <AttachmentCard
                        title={strings.license || ''}
                        textColor={colors.darkGrayText}
                        icon="attachment"
                        name={strings.takePhotoAndAttach || ''}
                        done={licenseDone}
                        onPress={onLicensePress}
                    />
                    <AttachmentCard
                        title={strings.passport || ''}
                        textColor={colors.darkGrayText}
                        icon="facePhoto"
                        name={strings.pictureSide || ''}
                        done={passportFrontDone}
                        onPress={onPassportFrontPress}
                    />
                    <AttachmentCard
                        title={strings.passport || ''}
                        textColor={colors.darkGrayText}
                        icon="attachment"
                        done={passportBackDone}
                        onPress={onPassportBackPress}
                        name={strings.residenceSide || ''}
                    />
                </View>
                <FlatList
                    columnWrapperStyle={styles.imagesWrapper}
                    numColumns={2}
                    data={photoList}
                    renderItem={({item}) => <ImageCard item={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
                {/* <View style={styles.footerWrapper}>
                    <Text style={[constStyle.medium, styles.firstFooter]}>
                        {strings.privacyPoliceFirst}
                    </Text>
                    <TouchableOpacity>
                        <Text style={[constStyle.bold, styles.secondFooter]}>
                            {strings.privacyPoliceSecond}
                        </Text>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
            {/* <View style={styles.footer}> */}
            <View style={styles.buttonWrapper}>
                <Button
                    onPress={onPress}
                    text={strings.further}
                />
            </View>
            {/* </View> */}
        </View>
    );
};

export default AddDocumentsScreenView;
