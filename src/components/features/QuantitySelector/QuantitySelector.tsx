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

export default function QuantitySelector({ initialQuantity }: QuantitySelectorProps) {
  const [quantityDiff, setquantityDiff] = useState(0);
  const resultQuantity = initialQuantity + quantityDiff;
  const formattedquantityDiff = quantityDiff > 0 ? `+${quantityDiff}` : `${quantityDiff}`;

  const handlequantityDiffChange = (value: string) => {
    const cleaned = value.replace(/^[-]?\d*$/g, "");
    if (cleaned === "" || cleaned === "-") {
      setquantityDiff(0);
      return;
    }
    const parsed = Number(cleaned);
    if (!Number.isNaN(parsed)) {
      setquantityDiff(parsed);
    }
  };

  const handleResultChange = (value: string) => {
    if (value === "") {
      setquantityDiff(-initialQuantity);
      return;
    }
    const parsed = Number(value);
    if (!Number.isNaN(parsed)) {
      setquantityDiff(parsed - initialQuantity);
    }
  };

  const handleQuickAction = (step: number) => {
    setquantityDiff((prev) => prev + step);
  };

  const formatSigned = (value: number) => (value > 0 ? `+${value}` : `${value}`);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Current Quantity:</Text>
        <Text style={styles.current}>{initialQuantity}</Text>
      </View>

      <View style={styles.groupContainer}>
        {QUICK_ACTIONS.negative.map((step) => (
          <View key={step} style={styles.groupItem}>
            <Button title={formatSigned(step)} variant={step > 0 ? "positive" : "negative"} onPress={() => handleQuickAction(step)} style={styles.buttonStyle} />
          </View>
        ))}

        <View style={styles.groupItem}>
          <Input variant="plain" style={styles.inputquantityDiff} keyboardType="numeric" value={formattedquantityDiff} onChangeText={handlequantityDiffChange} />
        </View>

        {QUICK_ACTIONS.positive.map((step, index) => (
          <View key={step} style={[styles.groupItem, index === QUICK_ACTIONS.negative.length - 1 && styles.groupItemLast]}>
            <Button title={formatSigned(step)} variant={step > 0 ? "positive" : "negative"} onPress={() => handleQuickAction(step)} style={styles.buttonStyle} />
          </View>
        ))}
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Resulting Quantity:</Text>
        <Input keyboardType="numeric" value={String(resultQuantity)} onChangeText={handleResultChange} style={{ width: 81, height: 40 }} />
      </View>
    </View>
  );
}
