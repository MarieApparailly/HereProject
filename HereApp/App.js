import RootTabNavigator from './navigation/RootTabNavigator';

export default App = () => {
  console.log(
    '////////////////////////////////////////////////////////// \n NEW TEST \n /////////////////////////////////////////////////////////////',
  );
  return <RootTabNavigator />;
};

// import React, { useEffect } from "react";
// import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

// const App = () => {
//   const handleLocationPermission = async () => {
//     // 👈
//     let permissionCheck = "";
//     if (Platform.OS === "ios") {
//       permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

//       if (
//         permissionCheck === RESULTS.BLOCKED ||
//         permissionCheck === RESULTS.DENIED
//       ) {
//         const permissionRequest = await request(
//           PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//         );
//         permissionRequest === RESULTS.GRANTED
//           ? console.warn("Location permission granted.")
//           : console.warn("location permission denied.");
//       }
//     }

//     if (Platform.OS === "android") {
//       permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

//       if (
//         permissionCheck === RESULTS.BLOCKED ||
//         permissionCheck === RESULTS.DENIED
//       ) {
//         const permissionRequest = await request(
//           PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//         );
//         permissionRequest === RESULTS.GRANTED
//           ? console.warn("Location permission granted.")
//           : console.warn("location permission denied.");
//       }
//     }
//   };

//   useEffect(() => {
//     handleLocationPermission();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <MapView
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={{
//           latitude: 44.8410593,
//           longitude: -0.5719674,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true} // 👈
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default App;
