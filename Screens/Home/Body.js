import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Weather from "./Weather";

const Body = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Weather navigation={navigation} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AirQuality", { name: "Tui ne", temp: "36" })
        }
      >
        <Text>Air Quality</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Body;
