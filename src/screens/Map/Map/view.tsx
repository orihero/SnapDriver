import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {Marker, Polyline, Overlay, PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapViewDirections from "react-native-maps-directions";
import mapConfig from '../../../configs/mapConfig';
import colors from '@constants/colors';
import Icon from '@assets/icons';
import styles from "./styles";
import images from "@assets/images";
import API_KEY from "@constants/apiKey";
import {getDistance} from 'geolib';


interface IProps {
    getCurrentLocation: () => void;
    setDestinationDetails: (payload: any) => void;
    onUserLocationChange: (payload: any) => void;
    routeCoordinates: any;
    setMapRef: (ref: any) => void;
    currentLocation: any;
    mapRef: any;
    route: any;
    distanceTravelled: number;
}

let Map = (
    {
        getCurrentLocation,
        setDestinationDetails,
        setMapRef,
        mapRef,
        route,
    }: IProps) => {
    const [ways, setWays] = useState([]);

    return (
        <View style={styles.container}>
            <MapView
                followsUserLocation
                ref={ref => setMapRef(ref)}
                style={styles.map}
                showsBuildings
                showsUserLocation
                loadingEnabled
                loadingIndicatorColor={colors.green}
                provider={PROVIDER_GOOGLE}
                // customMapStyle={mapConfig}
            >
                {/*<Marker coordinate={currentLocation}>*/}
                {/*    <Image style={styles.marker} source={images.marker}/>*/}
                {/*</Marker>*/}
                {/*<Polyline*/}
                {/*    coordinates={ways}*/}
                {/*    strokeColor={colors.blue}*/}
                {/*    strokeWidth={6}*/}
                {/*/>*/}
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
                            setWays(direction.coordinates);
                            setDestinationDetails({
                                coordinates: direction.coordinates,
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
                    <View style={styles.currentLocationMarker}>
                        <Icon name="location" size={20} color={colors.blue}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Map;
