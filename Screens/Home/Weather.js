import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import ListWeather from "./ListWeather.json";

const Weather = ({ navigation }) => {
  // const [weather, setWeather] = useState(null);
  //   useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: `http://5e65bb042aea440016afb33b.mockapi.io/api/weather`,
  //     }).then(({ data }) => {
  //       setWeather(data);
  //     });
  //   }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate("AirQuality", {
          date: item.date,
          temp: item.temperature,
        })
      }
    >
      <Text style={styles.day}>{item.date}</Text>
      <Image source={require(`../../assets/thunder.png`)} />
      <Text style={styles.temp}>{item.temperature}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        contentContainerStyle={styles.wt}
        data={ListWeather}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 20,
    paddingLeft: 13,
    paddingRight: 22,
  },
  day: {
    alignSelf: "center",
    fontFamily: "SF Pro Text",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    color: "blue",
  },
  img: {
    width: 29.9,
    height: 27.15,
    alignSelf: "center",
  },
  temp: {
    alignSelf: "center",
    fontFamily: "SF Pro Text",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold",
  },
  wt: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
});
