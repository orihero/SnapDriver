import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../../services/api";

import * as User from "../constants/user";

function* GetProfile(action: any) {
    try {
        const {data} = yield call(api.request.get, '/profile/show', action.payload);

        yield put({
            type: User.GetProfile.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: User.GetProfile.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}

function* UpdateProfile(action: any) {
    try {
        const {data} = yield call(api.request.post, '/profile/update', action.payload);

        yield put({
            type: User.UpdateProfile.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: User.UpdateProfile.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}

function* GetCar(action: any) {
    try {
        const {data} = yield call(api.request.get, '/profile/car', action.payload);

        yield put({
            type: User.GetCar.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: User.GetCar.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* UpdateLocation(action: any) {
    try {
        const {data} = yield call(api.request.post, '/profile/location', action.payload);

        yield put({
            type: User.UpdateLocation.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: User.UpdateLocation.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* GetNotifications(action: any) {
    try {
        const {data} = yield call(api.request.get, '/profile/notifications', action.payload);

        yield put({
            type: User.GetNotifications.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: User.GetNotifications.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* GetStatistics(action: any) {
    try {
        const {dateFrom, dateTo} = action.payload;
        const {data} = yield call(api.request.get, `/profile/statistics?date_from=${dateFrom}&date_to=${dateTo}`);

        yield put({
            type: User.GetStatistics.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: User.GetStatistics.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(User.GetProfile.REQUEST, GetProfile),
        takeLatest(User.UpdateProfile.REQUEST, UpdateProfile),
        takeLatest(User.GetCar.REQUEST, GetCar),
        takeLatest(User.UpdateLocation.REQUEST, UpdateLocation),
        takeLatest(User.GetNotifications.REQUEST, GetNotifications),
        takeLatest(User.GetStatistics.REQUEST, GetStatistics),
    ]);
}
