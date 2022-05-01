import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Body from "./Body";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Body navigation={navigation}></Body>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
