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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eh1fbv-yxf0:APA91bG6GDzP2w5ESyzR_IPvK6mJHrBH1eKKJ5FPegJJQtHcmRcdBm3T_r2QxdaZJlli-6lQDzhUw-TqmL6jOUCTCUuSEQ7NmDi_YFiJgStit3riUVzZnsGll11-SISL16ZwdosXQkS2",
    "keys": {
        "p256dh": "BKX4oWnWfLcGoooxMRKFpGRCmx9r3JCFUhz7wYDFOsNimG/b+4jqEJqhhoAB7wbKK3hsskypqUh7Pl+qXomP/jw=",
        "auth": "qeVG/Y7DnKS1QJzc4OqV+A=="
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