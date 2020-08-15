import React from 'react';
import {Image, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import mapConfig from '../../../configs/mapConfig';
import colors from '@constants/colors';
import Icon from '@assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from "./styles";
import images from "@assets/images";

interface IProps {
    getCurrentLocation: () => void;
    setMapRef: (ref: any) => void;
    currentLocation: any;
}

let Map = ({getCurrentLocation, setMapRef, currentLocation}: IProps) => {
    return (
        <View style={styles.container}>
            <MapView
                showsCompass={false}
                ref={ref => setMapRef(ref)}
                style={styles.map}
                showsBuildings
                loadingEnabled
                loadingIndicatorColor={colors.green}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapConfig}
            >
                <Marker coordinate={currentLocation}>
                    <Image style={styles.marker} source={images.marker}/>
                </Marker>
            </MapView>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={getCurrentLocation}>
                    <View
                        style={styles.currentLocationMarker}>
                        <Icon name="location" size={20} color={colors.blue}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Map;
