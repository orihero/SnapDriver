import React, {useEffect} from 'react';
import NotificationsScreenView from "./view";

const NotificationsScreenController = ({GetNotifications, notifications}: any) => {

    useEffect(() => {
        GetNotifications()
    }, []);

    return (
        <NotificationsScreenView
            notifications={notifications}
        />
    );
};

export default NotificationsScreenController;
