import plugin from "tailwindcss/plugin";

const bubbleArrow = plugin(({ addUtilities }) => {
  addUtilities({
    ".arrow-top": {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0",
      height: "0",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "16px solid #fff",
    },
  });
});

export default bubbleArrow;
