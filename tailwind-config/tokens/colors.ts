const grayPalette = {
  gray005: "#f0f0f0",
  gray012: "#E0E0E1",
  gray022: "#C7C7C9",
  gray040: "#99999c",
  gray054: "#75757a",
  gray064: "#5c5c61",
  gray072: "#47474d",
  gray084: "#292930",
  gray100: "#000008",
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
