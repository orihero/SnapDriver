import React from 'react';
import NewOrderScreenView from "./view";
import IAction from "@store/types/IAction";

interface IProps {
    newOrderModal: boolean;
    SkipNewOrder: IAction;
}

const NewOrderScreenController = ({newOrderModal,SkipNewOrder}: IProps) => {

    return (
        <NewOrderScreenView
            visible={newOrderModal}
            skipNewOrder={SkipNewOrder}
        />

    );
};

export default NewOrderScreenController;
