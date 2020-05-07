import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import mapConfig from '../../configs/mapConfig';

const MapScreen = () => {
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
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                customMapStyle={mapConfig}>
                {/*<Marker*/}
                {/*    draggable*/}
                {/*    coordinate={coordinates.x}*/}
                {/*    onDragEnd={(e) => {*/}
                {/*        setCoordinates({x: e.nativeEvent.coordinate})*/}
                {/*        console.warn(e.nativeEvent.coordinate)*/}
                {/*    }}*/}
                {/*/>*/}
            </MapView>
        </View>
    );
};

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
});

export default MapScreen;
