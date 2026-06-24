import { fireEvent, render, screen } from "@testing-library/react-native";

import QuantitySelector from "./QuantitySelector";

const INITIAL_QUANTITY = 55;

async function setup(onChange = jest.fn()) {
  await render(<QuantitySelector initialQuantity={INITIAL_QUANTITY} onChange={onChange} />);
  return { onChange };
}

function getDeltaInput() {
  return screen.getByDisplayValue("0");
}

function getResultInput() {
  return screen.getByTestId("result-input");
}

describe("QuantitySelector", () => {
  it("updates delta when typing in delta input", async () => {
    const { onChange } = await setup();

    await fireEvent.changeText(getDeltaInput(), "21");

    expect(onChange).toHaveBeenLastCalledWith(76, 21);
    expect(screen.getByDisplayValue("+21")).toBeTruthy();
  });

  it("updates delta when typing in result input", async () => {
    const { onChange } = await setup();

    await fireEvent.changeText(getResultInput(), "76");

    expect(onChange).toHaveBeenLastCalledWith(76, 21);
    expect(screen.getByDisplayValue("76")).toBeTruthy();
  });

  it("updates delta via quick actions (+10 +10 +1)", async () => {
    const { onChange } = await setup();

    await fireEvent.press(screen.getByLabelText("Add 10"));
    await fireEvent.press(screen.getByLabelText("Add 10"));
    await fireEvent.press(screen.getByLabelText("Add 1"));

    expect(onChange).toHaveBeenLastCalledWith(76, 21);
    expect(screen.getByDisplayValue("+21")).toBeTruthy();
  });

  it("formats negative and positive delta values in the input", async () => {
    await setup();

    await fireEvent.press(screen.getByLabelText("Subtract 5"));
    expect(screen.getByDisplayValue("-5")).toBeTruthy();

    await fireEvent.changeText(screen.getByDisplayValue("-5"), "");
    await fireEvent.press(screen.getByLabelText("Add 5"));
    expect(screen.getByDisplayValue("+5")).toBeTruthy();
  });

  it("resets delta to 0 when delta input is cleared", async () => {
    const { onChange } = await setup();

    await fireEvent.changeText(getDeltaInput(), "21");
    await fireEvent.changeText(screen.getByDisplayValue("+21"), "");

    expect(onChange).toHaveBeenLastCalledWith(INITIAL_QUANTITY, 0);
  });
});
