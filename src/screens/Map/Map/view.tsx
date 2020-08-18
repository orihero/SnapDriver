import React from 'react';
import {Image, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapViewDirections from "react-native-maps-directions";
import mapConfig from '../../../configs/mapConfig';
import colors from '@constants/colors';
import Icon from '@assets/icons';
import styles from "./styles";
import images from "@assets/images";
import API_KEY from "@constants/apiKey";


interface IProps {
    getCurrentLocation: () => void;
    setDestinationDetails: (payload: any) => void;
    setMapRef: (ref: any) => void;
    currentLocation: any;
    mapRef: any;
    route: any;
}

let Map = (
    {
        getCurrentLocation,
        setDestinationDetails,
        setMapRef,
        currentLocation,
        mapRef,
        route
    }: IProps) => {
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
                {
                    Object.keys(route).length > 0 && !!route.from.longitude &&
                    <MapViewDirections
                        origin={route.from}
                        mode={"DRIVING"}
                        destination={route.to}
                        apikey={API_KEY}
                        strokeWidth={6}
                        strokeColor={colors.blue}
                        onReady={(direction) => {
                            setDestinationDetails({
                                distance: Math.floor(direction.distance),
                                duration: Math.floor(direction.duration)
                            });
                            mapRef.fitToCoordinates([route.from, route.to], {
                                edgePadding: {
                                    top: 20,
                                    right: 20,
                                    bottom: 50,
                                    left: 20,
                                },
                            });
                        }}
                    />
                }
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
