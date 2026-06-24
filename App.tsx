import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { useAppFonts } from "./src/hooks/useAppFonts";

export default function App() {
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
