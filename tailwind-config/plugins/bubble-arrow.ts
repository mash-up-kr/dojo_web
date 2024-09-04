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
      borderBottom: "10px solid #fff",
    },

    ".drop-shadow": {
      boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.08)",
    },
  });
});

export default bubbleArrow;
