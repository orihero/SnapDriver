import React from 'react';
import {View, Modal} from 'react-native';
import Map from '../Map';
import strings from '@constants/strings';
import InnerHeader from '@components/navigation/InnerHeader';
import styles from "./styles";
import MapHeader from "@components/navigation/MapHeader";
import SelectNavigatorPanelView from "./Panels/SelectNavigatorPanel";


const TripScreenView = ({}) => {
    return (
        <View style={styles.container}>
            <Map/>
            <View>
                <MapHeader title={'В пути'}>
                    <InnerHeader
                        topTitle={strings.tillOrder}
                        topData="3 мин"
                        bottomTitle={strings.distance}
                        bottomData="0.5 км"
                        number="+998965594855"
                    />
                </MapHeader>
            </View>
            <SelectNavigatorPanelView/>
        </View>
    );
};

export default TripScreenView;
