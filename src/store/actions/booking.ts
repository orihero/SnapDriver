import {createAction} from "../utils";
import * as Booking from "../constants/booking";

const SetDriverStatusOnline = createAction(Booking.SetDriverStatusOnline.REQUEST);
const SetDriverStatusOffline = createAction(Booking.SetDriverStatusOffline.REQUEST);
const NewOrder = createAction(Booking.NewOrder.REQUEST);
const SkipNewOrder = createAction(Booking.SkipNewOrder.REQUEST);

export default {
    SetDriverStatusOnline,
    SetDriverStatusOffline,
    NewOrder,
    SkipNewOrder,
}
