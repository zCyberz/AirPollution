import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView>
        <Body></Body>
      </ScrollView>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
