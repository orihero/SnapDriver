import React, {useEffect, useState} from 'react';
import EarningsScreenView from "./view";
import moment from "moment";

const EarningsController = ({GetStatistics, navigation, user}: any) => {

    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        navigation.addListener('focus', () => {
            GetStatistics({
                dateFrom: moment(Date.now()).format('YYY-MM-DD'),
                dateTo: moment(Date.now()).format('YYY-MM-DD'),
            }, (data: any) => {
                setStatistics(data)
            })
        })
    }, []);

    const changePeriod = (dateFrom: any, dateTo: any) => {
        GetStatistics({
            dateFrom: dateFrom,
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
