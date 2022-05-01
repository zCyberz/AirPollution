import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AirQuality = ({ route, navigation }) => {
  const { date, temp } = route.params;

  return (
    <View style={{ padding: 50 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
        <Text>Temp: {temp}</Text>
        <Text>Date: {date}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AirQuality;

const styles = StyleSheet.create({});
