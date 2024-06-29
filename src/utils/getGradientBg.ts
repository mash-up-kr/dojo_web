export const getGradientBg = () => {
  return [
    "bg-gradient-purple",
    "bg-gradient-peach",
    "bg-gradient-yellow",
    "bg-gradient-green",
    "bg-gradient-blue",
    "bg-gradient-pink",
  ][Math.floor(Math.random() * 6)];
};
