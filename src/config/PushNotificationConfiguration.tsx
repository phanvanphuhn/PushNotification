import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const currentToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      // user has a device token
      return Promise.resolve(fcmToken);
    }
  } catch (error) {}

  // user doesn't have a device token yet
  return Promise.reject(null);
};
