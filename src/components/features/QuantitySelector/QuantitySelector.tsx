import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./QuantitySelector.styles";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";

interface QuantitySelectorProps {
  initialQuantity: number;
}

const QUICK_ACTIONS = {
  negative: [-10, -5, -1],
  positive: [1, 5, 10],
};

const parseDelta = (value: string): number => {
  if (value === "" || value === "-") return 0;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const formatSigned = (value: number) => (value > 0 ? `+${value}` : `${value}`);

export default function QuantitySelector({ initialQuantity }: QuantitySelectorProps) {
  const [delta, setDelta] = useState("0");

  const quantityDiff = parseDelta(delta);
  const resultQuantity = initialQuantity + quantityDiff;

  const handleDeltaChange = (text: string) => {
    const normalized = text.startsWith("+") ? text.slice(1) : text;
    if (!/^-?\d*$/.test(normalized)) return;
    setDelta(normalized);
  };

  const handleResultChange = (text: string) => {
    if (text === "") {
      setDelta(String(-initialQuantity));
      return;
    }
    if (!/^\d+$/.test(text)) return;
    setDelta(String(Number(text) - initialQuantity));
  };

  const handleQuickAction = (step: number) => {
    setDelta(String(quantityDiff + step));
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Current Quantity:</Text>
        <Text style={styles.current}>{initialQuantity}</Text>
      </View>

      <View style={styles.groupContainer}>
        {QUICK_ACTIONS.negative.map((step) => (
          <View key={step} style={styles.groupItem}>
            <Button title={formatSigned(step)} variant="negative" onPress={() => handleQuickAction(step)} style={styles.buttonStyle} />
          </View>
        ))}

        <View style={[styles.groupItem, styles.deltaInputContainer]}>
          <Input variant="plain" style={styles.inputDelta} keyboardType="numbers-and-punctuation" selectTextOnFocus value={delta > 0 ? `+${delta}` : `${delta}`} onChangeText={handleDeltaChange} />
        </View>

        {QUICK_ACTIONS.positive.map((step, index) => (
          <View key={step} style={[styles.groupItem, index === QUICK_ACTIONS.positive.length - 1 && styles.groupItemLast]}>
            <Button title={formatSigned(step)} variant="positive" onPress={() => handleQuickAction(step)} style={styles.buttonStyle} />
          </View>
        ))}
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.label}>Resulting Quantity:</Text>
        <Input keyboardType="numeric" value={String(resultQuantity)} onChangeText={handleResultChange} style={styles.resultInput} />
      </View>
    </View>
  );
}
