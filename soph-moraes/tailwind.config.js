module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulseExpand: {
          "0%": { transform: "scale(1)", opacity: "0.4" },
          "100%": { transform: "scale(1.6)", opacity: "0" } // controle de alcance aqui!
        }
      },
      animation: {
        pulseExpand: "pulseExpand 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
      }
    }
  }
};
