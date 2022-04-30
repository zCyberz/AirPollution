import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Weather = () => {
  const weatherItem = [
    {
      day: "Thứ 2",
      icon: "..",
      temp: "35",
    },
    {
      day: "Thứ 3",
      icon: "..",
      temp: "35",
    },
    {
      day: "Thứ 4",
      icon: "..",
      temp: "30",
    },
    {
      day: "Thứ 5",
      icon: "..",
      temp: "35",
    },
    {
      day: "Thứ 6",
      icon: "..",
      temp: "35",
    },
    {
      day: "Thứ 7",
      icon: "..",
      temp: "35",
    },
    {
      day: "Chủ Nhật",
      icon: "..",
      temp: "35",
    },
  ];
  return (
    <View>
      <Text>Weather</Text>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({});
