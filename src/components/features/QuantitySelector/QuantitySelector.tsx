import React, { type ReactNode, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./QuantitySelector.styles";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";

interface QuantitySelectorProps {
  initialQuantity: number;
  onChange?: (resultQuantity: number, delta: number) => void;
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

function GridCell({ children, bordered, isLast }: { children?: ReactNode; bordered?: boolean; isLast?: boolean }) {
  return (
    <View style={[styles.gridCell, bordered && styles.borderedCell, bordered && isLast && styles.borderedCellLast]}>
      {children}
    </View>
  );
}

function LabelRow({ label, input }: { label: string; input: ReactNode }) {
  return (
    <View style={[styles.gridRow, styles.labelRow]}>
      <View style={styles.labelSpan}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputColumn}>{input}</View>
      <View style={styles.labelSpan} />
    </View>
  );
}

export default function QuantitySelector({ initialQuantity, onChange }: QuantitySelectorProps) {
  const [delta, setDelta] = useState("0");

  const quantityDiff = parseDelta(delta);
  const resultQuantity = initialQuantity + quantityDiff;

  const updateDelta = (nextDelta: string) => {
    setDelta(nextDelta);
    const nextDiff = parseDelta(nextDelta);
    onChange?.(initialQuantity + nextDiff, nextDiff);
  };

  const handleDeltaChange = (text: string) => {
    const normalized = text.startsWith("+") ? text.slice(1) : text;
    if (!/^-?\d*$/.test(normalized)) return;
    updateDelta(normalized);
  };

  const handleResultChange = (text: string) => {
    if (text === "") {
      updateDelta(String(-initialQuantity));
      return;
    }
    if (!/^\d+$/.test(text)) return;
    updateDelta(String(Number(text) - initialQuantity));
  };

  const handleQuickAction = (step: number) => {
    updateDelta(String(quantityDiff + step));
  };

  const quantityInputProps = {
    variant: "plain" as const,
    style: styles.quantityInput,
  };

  return (
    <View style={styles.container}>
      <LabelRow
        label="Current Quantity:"
        input={
          <Input {...quantityInputProps} editable={false} value={String(initialQuantity)} testID="current-quantity-input" />
        }
      />

      <View style={[styles.gridRow, styles.borderedRow]}>
        {QUICK_ACTIONS.negative.map((step) => (
          <GridCell key={step} bordered>
            <Button title={formatSigned(step)} variant="negative" onPress={() => handleQuickAction(step)} style={styles.buttonStyle} />
          </GridCell>
        ))}

        <GridCell bordered>
          <Input
            {...quantityInputProps}
            keyboardType="numbers-and-punctuation"
            selectTextOnFocus
            value={quantityDiff > 0 ? `+${delta}` : `${delta}`}
            onChangeText={handleDeltaChange}
          />
        </GridCell>

        {QUICK_ACTIONS.positive.map((step, index) => (
          <GridCell key={step} bordered isLast={index === QUICK_ACTIONS.positive.length - 1}>
            <Button title={formatSigned(step)} variant="positive" onPress={() => handleQuickAction(step)} style={styles.buttonStyle} />
          </GridCell>
        ))}
      </View>

      <LabelRow
        label="Resulting Quantity:"
        input={
          <Input
            {...quantityInputProps}
            variant="outlined"
            keyboardType="numeric"
            value={String(resultQuantity)}
            onChangeText={handleResultChange}
            testID="result-input"
          />
        }
      />
    </View>
  );
}
