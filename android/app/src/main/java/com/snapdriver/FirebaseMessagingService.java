package com.snapdriver;

import com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService;

class FirebaseMessagingService extends RNPushNotificationListenerService {
    @Override
    public void onMessageReceived(RemoteMessage message) {
        super.onMessageReceived(message);

        if (remoteMessage.getNotification() != null) {
            startActivity(new Intent(this, NotificationActivity.class));
        }
    }
}