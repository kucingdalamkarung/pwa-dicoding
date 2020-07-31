const webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BDyzryZ-NuYhwb9WmgXENhmWTCN11VX_XjWHnGL_7daiQj8RSHWXl6PvJDMtjwgSo7a7z4jW5Br4htB71R9w-Hw",
    "privateKey": "xa86hwboi0SeDhy1nR_u7dWtwCufFZnaJ_6BMUAtnmA"
};

webPush.setVapidDetails(
    'mailto:fiqrikm18@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cGeiu0TsWhg:APA91bGNLBHJevw0IC0qulc2SdpBs4To2w-Sl8qfYU8bKfojdZpWbvQk1Lb17TLB-2xEJyjJ9C14vVnZgjsn-2P5wH1qoNzOhBLRPNyyAr_TKDQvAB2Wvk7yyIry0yQ1cHCDKqrcRq40",
    "keys": {
        "p256dh": "BGw4qLz2k/oaFgGUba2Dsu/U7ykMlkuDbdu+56xkQUwF8gi2GAdc/mYvlADC8bvacAnmkRhOyYimad1+06BXkP4=",
        "auth": " hLB92R20IiZg/e/DaqLgBQ=="
    }
};

const payload = "Notification from Football App";
const options = {
    gcmAPIKey: "525230125876",
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);