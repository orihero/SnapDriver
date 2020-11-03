package com.snapdriver;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class NotificationActivity extends ReactActivity
{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // If this activity is the root activity of the task, the app is not running
        if (isTaskRoot())
        {
            // Start the app before finishing
            Intent startAppIntent = new Intent(getApplicationContext(), MainActivity.class);
            startAppIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(startAppIntent);
        }

        // Now finish, which will drop the user in to the activity that was at the top of the task stack
        finish();
    }
}