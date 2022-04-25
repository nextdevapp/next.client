module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        lg: "1025px",
        "2xl": "1500px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
