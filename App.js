import { Text, SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
import AssetExample from "./components/AssetExample";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{ title: "Second" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
