import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";

export default function SecondScreen({ navigation, route }) {
  let dataObj = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Second Screen</Text>
      <View style={styles.content}>
        <List.Item
          style={styles.list}
          title={dataObj.desc}
          description={dataObj.desc2}
          left={() => <List.Icon icon="dolphin" />}
        />
        <List.Item
          style={styles.list}
          title={dataObj.desc3}
          description={dataObj.desc4}
          left={() => <List.Icon icon="shark" />}
        />
      </View>

      <TouchableOpacity
        style={styles.press}
        title="Go to Home"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.pressText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "centered",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  content: {
    marginTop: 20,
  },
  press: {
    width: "100%",
    height: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 40,
  },
  paragraph: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  pressText: {
    color: "#fff",
  },
  list: {
    marginBottom: 20,
    backgroundColor: "#d1d1d1",
  },
});
