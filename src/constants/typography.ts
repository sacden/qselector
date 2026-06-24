export const FONT_FAMILY = {
  regular: "Lato_400Regular",
  bold: "Lato_700Bold",
} as const;

export const typography = {
  regular: {
    fontFamily: FONT_FAMILY.regular,
  },
  bold: {
    fontFamily: FONT_FAMILY.bold,
  },
} as const;
