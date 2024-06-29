import plugin from "tailwindcss/plugin";

const backgroundLinear = plugin(({ addUtilities }) => {
  addUtilities({
    ".bg-gradient-purple": {
      background:
        "linear-gradient(168deg, #DFD0FD 0%, #CDC0FF 47.22%, #B3F9F5 100%)",
    },
    ".bg-gradient-peach": {
      background:
        "linear-gradient(168deg, #FFC4C4 0%, #FFD3B9 47.22%, #FFECB9 100%)",
    },
    ".bg-gradient-yellow": {
      background:
        "linear-gradient(168deg, #FFEBA5 0%, #FFF496 47.22%, #DDFFA0 100%)",
    },
    ".bg-gradient-green": {
      background:
        "linear-gradient(168deg, #BBFFCA 0%, #B9FFD9 47.22%, #B9FBFF 100%)",
    },
    ".bg-gradient-blue": {
      background:
        "linear-gradient(168deg, #B9EAFF 0%, #B9E3FF 47.22%, #B9C8FF 100%)",
    },
    ".bg-gradient-pink": {
      background:
        "linear-gradient(168deg, #FAB9FF 0%, #FFB9E8 47.22%, #FFB9B9 100%)",
    },
  });
});

export default backgroundLinear;
