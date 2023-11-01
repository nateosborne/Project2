import * as React from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const data = {
    desc: "This is a list header",
    desc2: "This is a description",
    desc3: "This is another list header",
    desc4: "This is another description",
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Card>
        <Card.Content>
          <Card.Cover
            source={{
              uri: "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
            }}
          />
          <Text style={styles.paragraph}>Random image title</Text>
        </Card.Content>
      </Card>
      <TouchableOpacity
        style={styles.press}
        title="Next Page"
        onPress={() => navigation.navigate("SecondScreen", data)}
      >
        <Text style={styles.pressText}>Next Page</Text>
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
  header: {
    textAlign: "center",
    fontSize: 40,
  },
  paragraph: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  press: {
    width: "100%",
    height: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  pressText: {
    color: "#fff",
  },
});
