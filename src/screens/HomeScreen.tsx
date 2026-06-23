import { SafeAreaView, View } from "react-native";

import Button from "../components/shared/Button/Button";
import Input from "../components/shared/Input/Input";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          gap: 10,
        }}
      >
        <View style={{ width: 81 }}>
          <Input size="md" placeholder="0" keyboardType="numeric" />
        </View>
        <View style={{ width: 81, height: 40 }}>
          <Button title="+10" variant="positive" onPress={() => console.log("Pressed")} />
        </View>
      </View>
    </SafeAreaView>
  );
}
