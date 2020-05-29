import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, StatusBar, Image, View} from 'react-native';
import Map from './Map';
import {NavigationScreenProp} from 'react-navigation';
import GradientBackground from '../../components/common/HatCutout';
import BubleCutout from '../../components/common/Buble';
import Header from '../../components/navigation/Header';
import strings from '../../locales/strings';
import colors from '../../constants/colors';
import InnerHeader from '../../components/navigation/InnerHeader';
import SwipePanel from '../../components/container/SwipePanel';
import RectangleButton from '../../components/common/RectangleButton';
import {
    CONTAINER_PADDING,
    BORDER_RADIUS,
    deviceWidth,
} from '../../constants/values';
import Icon from '../../assets/icons';
import HatCutout from '../../components/common/HatCutout';
import constStyles from '../../constants/constStyles';
import Touchable from '../../components/common/Touchable';
import images from '../../assets/images';

interface PassangerProps {
    navigation: NavigationScreenProp<{}>;
}

const steps = [
    {
        button: strings.atPoint,
        slideStart: 250,
        slideEnd: 300,
        height: 200,
        drag: false,
    },
    {
        height: 170,
        drag: true,
        button: strings.letsGo,
        slideStart: 220,
        slideEnd: 400,
    },
    {
        button: strings.finishDrive,
        drag: false,
        slideStart: 240,
        slideEnd: 330,
        height: 420,
    },
    {
        button: strings.finish,
        drag: false,
        slideStart: 250,
        slideEnd: 400,
    },
    {
        button: strings.finish,
        slideStart: 430,
    },
];

let StepOne = () => {
    return (
        <View style={{}}>
            <HatCutout
                style={{
                    width: deviceWidth - 20,
                    height: 15,
                }}
            />
            <View style={{backgroundColor: colors.white, padding: 20}}>
                <View
                    style={{
                        borderBottomColor: colors.superPaleGray,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                    }}>
                    <Text
                        style={[
                            {color: colors.black, fontSize: 18},
                            constStyles.light,
                        ]}>
                        {strings.selectCard}
                    </Text>
                    <View
                        style={[
                            constStyles.shadow,
                            {
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                        ]}>
                        <Touchable>
                            <View
                                style={{
                                    padding: 10,
                                    paddingHorizontal: 14,
                                    backgroundColor: colors.white,
                                }}>
                                <Icon
                                    name="locationFancy"
                                    size={20}
                                    color={colors.blue}
                                />
                            </View>
                        </Touchable>
                    </View>
                </View>
                <View
                    style={{
                        paddingVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Image
                        style={{height: 20, width: 14, resizeMode: 'contain'}}
                        source={images.location}
                    />
                    <View
                        style={{
                            paddingLeft: 10,
                        }}>
                        <Text
                            style={[
                                {
                                    fontSize: 14,
                                },
                                constStyles.light,
                            ]}>
                            {strings.drivingFrom}
                        </Text>
                        <Text
                            style={[
                                {
                                    fontSize: 15,
                                },
                                constStyles.bold,
                            ]}>
                            Саларская набережаная 35
                        </Text>
                    </View>
                </View>
                <View style={{height: 90}} />
            </View>
        </View>
    );
};

let StepTwo = () => {
    return (
        <View style={{}}>
            <HatCutout
                style={{
                    width: deviceWidth - 20,
                    height: 15,
                }}
            />
            <View
                style={{
                    backgroundColor: colors.white,
                }}>
                <View
                    style={{
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: colors.grayText,
                        top: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 10,
                        width: 30,
                    }}
                />
                <View
                    style={{
                        paddingTop: 10,
                        padding: 20,
                        flexDirection: 'row',
                        backgroundColor: colors.white,
                    }}>
                    <View style={{paddingTop: 5}}>
                        <Image
                            source={images.locationBorder}
                            style={{
                                width: 14,
                                height: 60,
                                resizeMode: 'contain',
                            }}
                        />
                    </View>
                    <View>
                        <View
                            style={{
                                marginLeft: 10,
                                paddingBottom: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: colors.superPaleGray,
                            }}>
                            <Text
                                style={[
                                    {
                                        fontSize: 14,
                                    },
                                    constStyles.light,
                                ]}>
                                {strings.drivingFrom}
                            </Text>
                            <Text
                                style={[
                                    {
                                        fontSize: 15,
                                    },
                                    constStyles.bold,
                                ]}>
                                Саларская набережаная 35
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingLeft: 10,
                                paddingTop: 5,
                            }}>
                            <Text
                                style={[
                                    {
                                        fontSize: 14,
                                    },
                                    constStyles.light,
                                ]}>
                                {strings.drivingTo}
                            </Text>
                            <Text
                                style={[
                                    {
                                        fontSize: 15,
                                    },
                                    constStyles.bold,
                                ]}>
                                Дом
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        paddingHorizontal: 15,
                        backgroundColor: colors.white,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            alignItems: 'center',
                        }}>
                        <Icon
                            name="airCondition"
                            color={colors.blue}
                            size={25}
                        />
                        <Text style={{width: 200}}>
                            {strings.airConditioner}
                        </Text>
                        <Icon
                            name="checkCircle"
                            color={colors.blue}
                            size={25}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            alignItems: 'center',
                        }}>
                        <Icon name="smoke" color={colors.black} size={25} />
                        <Text style={{width: 200}}>
                            {strings.carForSmokers}
                        </Text>
                        <Icon
                            name="checkCircle"
                            color={colors.blue}
                            size={25}
                        />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        paddingVertical: 10,
                        paddingBottom: 20,
                        backgroundColor: colors.white,
                    }}>
                    <View
                        style={[
                            {
                                padding: 10,
                                backgroundColor: colors.white,
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="path" size={25} color={colors.black} />
                    </View>
                    <View
                        style={[
                            {
                                padding: 10,
                                backgroundColor: colors.white,
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="chat" size={25} color={colors.blue} />
                    </View>
                    <View
                        style={[
                            {
                                padding: 10,
                                backgroundColor: colors.white,
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="noCar" size={25} color={colors.black} />
                    </View>
                </View>
            </View>
        </View>
    );
};

let StepThree = () => {
    return (
        <View style={{}}>
            <HatCutout
                style={{
                    width: deviceWidth - 20,
                    height: 15,
                }}
            />
            <View
                style={{
                    paddingBottom: 20,
                    backgroundColor: colors.white,
                }}>
                <View
                    style={{
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                        backgroundColor: colors.white,
                    }}>
                    <View
                        style={{
                            paddingVertical: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{
                                height: 20,
                                width: 14,
                                resizeMode: 'contain',
                            }}
                            source={images.location}
                        />
                        <View
                            style={{
                                paddingLeft: 10,
                            }}>
                            <Text
                                style={[
                                    {
                                        fontSize: 14,
                                    },
                                    constStyles.light,
                                ]}>
                                {strings.drivingFrom}
                            </Text>
                            <Text
                                style={[
                                    {
                                        fontSize: 15,
                                    },
                                    constStyles.bold,
                                ]}>
                                Саларская набережаная 35
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        paddingVertical: 10,
                        paddingBottom: 20,
                        backgroundColor: colors.white,
                    }}>
                    <View
                        style={[
                            {
                                padding: 10,
                                backgroundColor: colors.white,
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="path" size={25} color={colors.black} />
                    </View>
                    <View
                        style={[
                            {
                                padding: 10,
                                backgroundColor: colors.white,
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="chat" size={25} color={colors.blue} />
                    </View>
                    <View
                        style={[
                            {
                                padding: 10,
                                backgroundColor: colors.white,
                                borderRadius: 30,
                                overflow: 'hidden',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="noCar" size={25} color={colors.black} />
                    </View>
                </View>
            </View>
        </View>
    );
};

let StepFour = () => {
    return (
        <View style={{}}>
            <HatCutout
                style={{
                    width: deviceWidth - 20,
                    height: 15,
                }}
            />
            <View style={{backgroundColor: colors.white, padding: 20}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: colors.superPaleGray,
                        borderBottomWidth: 1,
                    }}>
                    <Text style={[constStyles.bold, {fontSize: 15}]}>
                        Стоимость
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                            style={[
                                constStyles.bold,
                                {fontSize: 23, color: colors.blue},
                            ]}>
                            25 500
                        </Text>
                        <Text
                            style={[
                                constStyles.light,
                                {
                                    paddingLeft: 10,
                                    fontSize: 19,
                                    color: colors.blue,
                                },
                            ]}>
                            сум
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: colors.superPaleGray,
                        borderBottomWidth: 1,
                        paddingVertical: 10,
                    }}>
                    <Text style={[constStyles.bold, {fontSize: 15}]}>
                        Время
                    </Text>
                    <Text style={[constStyles.bold, {fontSize: 15}]}>
                        12 мин
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: colors.superPaleGray,
                        paddingVertical: 10,
                        borderBottomWidth: 1,
                    }}>
                    <Text style={[constStyles.bold, {fontSize: 15}]}>
                        Детали заказа
                    </Text>
                    <Icon name="setting" size={18} />
                </View>
            </View>
        </View>
    );
};

const Passanger = ({navigation}: PassangerProps) => {
    //functions
    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
    }, [navigation]);
    const onPress = () => {
        if (currentStep != 4) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate('MapPage');
        }
    };
    //component
    const Panel = () => {
        switch (currentStep) {
            case 1:
                return (
                    <SwipePanel
                        height={steps[currentStep - 1].height}
                        top={steps[currentStep - 1].slideEnd}
                        bottom={steps[currentStep - 1].slideStart}
                        drag={steps[currentStep - 1].drag}>
                        <StepOne />
                    </SwipePanel>
                );

            case 2:
                return (
                    <SwipePanel
                        height={steps[currentStep - 1].height}
                        top={steps[currentStep - 1].slideEnd}
                        bottom={steps[currentStep - 1].slideStart}
                        drag={steps[currentStep - 1].drag}>
                        <StepTwo />
                    </SwipePanel>
                );

            case 3:
                return (
                    <SwipePanel
                        height={steps[currentStep - 1].height}
                        top={steps[currentStep - 1].slideEnd}
                        bottom={steps[currentStep - 1].slideStart}
                        drag={steps[currentStep - 1].drag}>
                        <StepThree />
                    </SwipePanel>
                );

            case 4:
                return (
                    <SwipePanel
                        height={steps[currentStep - 1].height}
                        top={steps[currentStep - 1].slideEnd}
                        bottom={steps[currentStep - 1].slideStart}
                        drag={steps[currentStep - 1].drag}>
                        <StepFour />
                    </SwipePanel>
                );

            // case 5:
            //     return (
            //         <SwipePanel
            //             height={steps[currentStep - 1].height}
            //             top={steps[currentStep - 1].slideEnd}
            //             bottom={steps[currentStep - 1].slideStart}
            //             drag={steps[currentStep - 1].drag}>
            //             <StepFive />
            //         </SwipePanel>
            //     );

            default:
                return (
                    <View>
                        <Text>something is wrong</Text>
                    </View>
                );
        }
    };

    //variables
    let [currentStep, setCurrentStep] = useState(1);

    return (
        <View style={styles.container}>
            <Map />
            <Header
                round
                navigation={navigation}
                menu
                notification
                title={strings.acceptedOrder}
                titleColor={colors.black}
                backColor={colors.white}
                // round={false}
            >
                <InnerHeader
                    topTitle={strings.tillOrder || ''}
                    topData="3 мин"
                    bottomTitle={strings.distance || ''}
                    bottomData="0.5 км"
                    number="+998965594855"
                />
            </Header>

            <Panel />

            <View style={styles.buttonWrapper}>
                <RectangleButton
                    onPress={onPress}
                    backColor={colors.orange}
                    text={steps[currentStep - 1].button}
                    textColor={colors.black}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.transparent,
        justifyContent: 'space-between',
    },
    content: {
        // height: 400,
        // overflow: 'hidden',
        borderRadius: BORDER_RADIUS,
        // marginHorizontal: CONTAINER_PADDING,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        margin: 10,
        marginBottom: 0,
        padding: 20,
        backgroundColor: colors.white,
    },
});

export default Passanger;
