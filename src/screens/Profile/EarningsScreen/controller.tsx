import React, {useEffect, useState} from 'react';
import EarningsScreenView from "./view";
import moment from "moment";

const EarningsController = ({GetStatistics, navigation, user}: any) => {

    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        navigation.addListener('focus', () => {
            GetStatistics({
                dateFrom: '2020-09-16',
                dateTo: '2020-08-16',
            }, (data: any) => {
                setStatistics(data)
            })
        })
    }, []);

    const changePeriod = (dateTo: any) => {
        GetStatistics({
            dateFrom: moment(new Date()).format('YYYY-MM-DD'),
            dateTo: dateTo,
        }, (data: any) => {
            setStatistics(data)
        })
    };

    return (
        <EarningsScreenView
            changePeriod={changePeriod}
            statistics={statistics}
            balance={user.balance}
        />
    );

};

export default EarningsController;
