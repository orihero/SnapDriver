import React, {useState} from 'react';
import SelectNavigatorPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
}

const SelectNavigatorPanelController = ({ChangeOrderStatus, newOrder}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const changeOrderStatus = () => {
        setIsLoading(true)
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.id,
            orderId: data.id,
            orderStatus: OrderStatus.ARRIVED
        }, () => {
            setIsLoading(false)
        }, () => {
            setIsLoading(false)
        })
    };

    return (
        <SelectNavigatorPanelView
            changeOrderStatus={changeOrderStatus}
            isLoading={isLoading}
            drivingFrom={newOrder.data.routes[0].address}
        />

    );
};

export default SelectNavigatorPanelController;
