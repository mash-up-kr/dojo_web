const grayPalette = {
  grey005: "#f0f0f0",
  grey012: "#E0E0E1",
  grey022: "#C7C7C9",
  grey040: "#99999c",
  grey054: "#75757a",
  grey064: "#5c5c61",
  grey072: "#47474d",
  grey084: "#292930",
  grey100: "#000008",
} as const;

const whitePalette = {
  offWhite010: "#ffffff",
  offWhite020: "#f8f8fa",
};

const colorsPalette = {
  ...grayPalette,
  ...whitePalette,
} as const;

const semanticPalette = {
  purple006: "#f9f6ff",
  purple012: "#f3edff",
  purple040: "#d0caff",
  purple100: "#854bff",
} as const;

const colors = {
  ...semanticPalette,
  ...colorsPalette,
} as const;

export default colors;
