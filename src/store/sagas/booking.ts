import {put, takeLatest, call, all, fork} from "redux-saga/effects";
import {eventChannel} from "redux-saga";
import io from "socket.io-client"
import Echo from "laravel-echo";

import api from "../../services/api";
import * as Booking from "../constants/booking";

let echo: any;


function* SetDriverStatusOnline(action: any) {
    try {

        echo = new Echo({
            host: 'http://snap.vroom.uz:6060',
            broadcaster: 'socket.io',
            client: io,
        });


        echo
            .channel('snaptaxi_database_car.105')
            .listen('.SearchEvent', (booking: any) => {
                action.cb(booking)
            });


        yield put({
            type: Booking.SetDriverStatusOnline.SUCCESS,
        });

    } catch (error) {

        yield put({
            type: Booking.SetDriverStatusOnline.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}

function* SetDriverStatusOffline(action: any) {
    try {

        echo.disconnect();

        yield put({
            type: Booking.SetDriverStatusOffline.SUCCESS,
        });

        yield call(action.cb);

    } catch (error) {

        yield put({
            type: Booking.SetDriverStatusOffline.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}

function* NewOrder(action: any) {
    try {

        yield put({
            type: Booking.NewOrder.SUCCESS,
        });


    } catch (error) {

        yield put({
            type: Booking.NewOrder.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(Booking.SetDriverStatusOnline.REQUEST, SetDriverStatusOnline),
        takeLatest(Booking.SetDriverStatusOffline.REQUEST, SetDriverStatusOffline),
        takeLatest(Booking.NewOrder.REQUEST, NewOrder),
    ]);
}

