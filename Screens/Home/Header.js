import { StyleSheet, Text, View, Image } from "react-native";
import moment from "moment";
import translate from "../../translate.json";

const Header = () => {
  const dayInWeek = translate.dayInWeek[moment().format("ddd")];
  const day = moment().format("DD");
  const month = moment().format("MM");
  const year = moment().format("YYYY");
  console.log(`${dayInWeek}, ngày ${day} tháng ${month}, ${year}`);
  const date = `${dayInWeek}, ngày ${day} tháng ${month}, ${year}`;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.img}
            source={require("../../assets/Circle.png")}
          />
          <Text style={styles.textTop}>AirLotus</Text>
        </View>

        <Text style={styles.headerRight}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flex: 4,
  },

  img: {
    marginLeft: 20,
  },
  textTop: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  tnt: {
    // paddingVertical:20
  },
});

export default Header;
