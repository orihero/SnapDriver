package com.snapdriver;

import android.app.KeyguardManager;
import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;
import android.view.WindowManager;

import com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService;
import com.dieam.reactnativepushnotification.modules.RNReceivedMessageHandler;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.google.firebase.messaging.RemoteMessage;

public class FirebaseMessagingService extends RNPushNotificationListenerService {

    public void open(String PackageName) {
        PowerManager.WakeLock screenLock = ((PowerManager) FirebaseMessagingService.this.getSystemService(POWER_SERVICE)).newWakeLock(
                PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, ":SnapDriver");
        screenLock.acquire();

        screenLock.release();
        KeyguardManager km = (KeyguardManager) FirebaseMessagingService.this.getSystemService(Context.KEYGUARD_SERVICE);
        final KeyguardManager.KeyguardLock kl = km.newKeyguardLock("MyKeyguardLock");
        kl.disableKeyguard();

        //  Intent dialogIntent = new Intent(getReactApplicationContext(), MainActivity.class);
        Intent dialogIntent = FirebaseMessagingService.this.getPackageManager().getLaunchIntentForPackage(PackageName);

        dialogIntent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_SINGLE_TOP);
//        dialogIntent.addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED +
//                WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD +
//                //      WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON +
//                WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
        FirebaseMessagingService.this.startActivity(dialogIntent);
    }

    @Override
    public void onMessageReceived(RemoteMessage message) {
        super.onMessageReceived(message);

        if (message.getNotification() != null) {
            open("com.snapdriver");
            final ReactInstanceManager mReactInstanceManager = ((ReactApplication) getApplication()).getReactNativeHost().getReactInstanceManager();
            ReactContext context = mReactInstanceManager.getCurrentReactContext();
            // If it's constructed, send a notification
            if (context == null) {
                // Otherwise wait for construction, then send the notification
                mReactInstanceManager.addReactInstanceEventListener(new ReactInstanceManager.ReactInstanceEventListener() {
                    public void onReactContextInitialized(ReactContext context) {
                        mReactInstanceManager.removeReactInstanceEventListener(this);
                    }
                });
                if (!mReactInstanceManager.hasStartedCreatingInitialContext()) {
                    // Construct it in the background
                    mReactInstanceManager.createReactContextInBackground();
                }
            }
            startActivity(new Intent(this, NotificationActivity.class));
        }
    }

}