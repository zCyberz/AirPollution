import { StyleSheet, View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/Home/Home";
import AirQuality from "./Screens/AirQuality/AirQuality";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AirQuality"
          component={AirQuality}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {},
});
export default App;
