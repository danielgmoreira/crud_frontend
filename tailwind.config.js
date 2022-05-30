module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        pallet: {
          100: "#FFFFFF",
          200: "#E5E5E5",
          400: "#3C61B9",
          500: "#FCA311",
          600: "#14213D",
          700: "#000000",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
