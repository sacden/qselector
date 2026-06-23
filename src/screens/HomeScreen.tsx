import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/shared/Button/Button";
import Input from "../components/shared/Input/Input";
import QuantitySelector from "../components/features/QuantitySelector";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          gap: 10,
        }}
      >
        <QuantitySelector initialQuantity={55} />
      </View>
    </SafeAreaView>
  );
}
