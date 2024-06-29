import plugin from "tailwindcss/plugin";

const translateHalf = plugin(({ addUtilities }) => {
  addUtilities({
    ".translate-half": { transform: "translate(-50%, -50%)" },
  });
});

export default translateHalf;
