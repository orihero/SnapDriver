import {put, takeLatest, call, all} from "redux-saga/effects";
import {useSelector} from "react-redux";
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
            .channel(`snaptaxi_database_car.${action.payload.carId}`)
            .listen('.SearchEvent', ({booking}: any) => {
                action.cb({...booking.id, ...booking.channel})
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
            payload: action.payload
        });

    } catch (error) {

        yield put({
            type: Booking.NewOrder.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}

function* AcceptNewOrder(action: any) {
    try {

        const {orderId, driverId} = action.payload;

        const {data} = yield call(api.request.put, `/car-booking/status/${orderId}`, {
            status: 'accepted',
            driver_id: driverId,
        });


        echo
            .channel(`snaptaxi_database_car_order.${orderId}`)
            .listen('.OrderStatusEvent', (orderInfo: any) => {
            });

        yield put({
            type: Booking.AcceptNewOrder.SUCCESS,
            payload: data.data
        });

        yield call(action.cb);

    } catch (error) {

        yield put({
            type: Booking.AcceptNewOrder.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}

function* ChangeOrderStatus(action: any) {
    try {

        const {orderStatus, driverId, orderId} = action.payload;

        const {data} = yield call(api.request.put, `/car-booking/status/${orderId}`, {
            status: orderStatus,
            driver_id: driverId,
        });

        yield put({
            type: Booking.ChangeOrderStatus.SUCCESS,
            payload: data.data
        });

        yield call(action.cb);

    } catch (error) {

        yield put({
            type: Booking.ChangeOrderStatus.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}

function* GetOrderList(action: any) {
    try {
        const {data} = yield call(api.request.get, '/car-booking', action.payload);

        yield put({
            type: Booking.GetOrderList.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: Booking.GetOrderList.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(Booking.SetDriverStatusOnline.REQUEST, SetDriverStatusOnline),
        takeLatest(Booking.SetDriverStatusOffline.REQUEST, SetDriverStatusOffline),
        takeLatest(Booking.NewOrder.REQUEST, NewOrder),
        takeLatest(Booking.AcceptNewOrder.REQUEST, AcceptNewOrder),
        takeLatest(Booking.ChangeOrderStatus.REQUEST, ChangeOrderStatus),
        takeLatest(Booking.GetOrderList.REQUEST, GetOrderList),
    ]);
}

