import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import QuantitySelector from "../components/features/QuantitySelector";
import { styles } from "./HomeScreen.styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <QuantitySelector initialQuantity={55} />
      </View>
    </SafeAreaView>
  );
}
