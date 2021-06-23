module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      // 扩展
      spacing: {
        100: "400px",
      },
      margin: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
