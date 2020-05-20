import React, {useState, useEffect, forwardRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    PermissionsAndroid,
    Image,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import mapConfig from '../../configs/mapConfig';
import Geolocation from '@react-native-community/geolocation';
import {NavigationScreenProp} from 'react-navigation';
import colors from '../../constants/colors';
import images from '../../assets/images';
import Icon from '../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import constStyles from '../../constants/constStyles';

interface MapProps {
    // navigation: NavigationScreenProp<{}>;
}

let MapScreen = forwardRef((ref) => {
    const [coordinates, setCoordinates] = useState({
        x: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        y: {
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
    });
    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
    }, []);

    let [currentMarker, setCurrentMarker] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.0021,
    });

    let [currentRegion, setCurrentRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.0021,
    });

    //Map,Geolocation functions
    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Cool Photo App Location Permission',
                    message: 'Cool Photo App needs access to your location ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            // console.warn(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.warn('You can use the location');
            } else {
                // console.warn('Location permission denied');
            }
        } catch (err) {
            // console.warn(err);
        }
    }

    let getCurrentPosition = () => {
        Geolocation.getCurrentPosition((info) => {
            if (!!info) {
                // console.warn(info.coords);
                setCurrentMarker(info.coords);
                setCurrentRegion({
                    ...info.coords,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.0021,
                });
            }
        });
    };

    useEffect(() => {
        requestLocationPermission();
        Geolocation.getCurrentPosition((info) => {
            if (!!info) {
                // console.warn(info.coords);
                setCurrentMarker(info.coords);
                setCurrentRegion({
                    ...info.coords,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.0021,
                });
            }
        });
    }, []);
    return (
        <View ref={ref.current} style={styles.container}>
            <MapView
                style={styles.map}
                onLongPress={({nativeEvent}: any) => {
                    setCurrentMarker(nativeEvent.coordinate);
                    setCurrentRegion({
                        ...nativeEvent.coordinate,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.0021,
                    });
                }}
                loadingEnabled={true}
                loadingIndicatorColor={colors.green}
                showsMyLocationButton={true}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                region={currentRegion}
                customMapStyle={mapConfig}>
                <Marker coordinate={currentMarker}>
                    <Image style={styles.marker} source={images.marker} />
                </Marker>
            </MapView>
            <View
                style={{
                    bottom: 80,
                    right: 10,
                    position: 'absolute',
                    zIndex: 1,
                    padding: 10,
                }}>
                <TouchableOpacity
                    onPress={() => {
                        getCurrentPosition();
                    }}>
                    <View
                        style={[
                            {
                                overflow: 'hidden',
                                borderRadius: 30,
                                backgroundColor: colors.white,
                                // margin: 10,
                                height: 35,
                                width: 35,
                                margin: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                            constStyles.shadow,
                        ]}>
                        <Icon name="location" size={20} color={colors.blue} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: -1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    marker: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    },
});

export default MapScreen;
