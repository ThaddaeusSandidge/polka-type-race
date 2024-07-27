/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        'slider-container': '20px 0',
        'progress-container': '10px 0',
      },
      backgroundColor: {
        'progress-container': '#f3f3f3',
        'progress-bar': '#4caf50',
        'slider': '#ddd',
        'slider-thumb': '#4caf50',
      },
      borderRadius: {
        'progress-container': '5px',
        'slider-thumb': '50%',
      },
      height: {
        'progress-container': '50px',
        'progress-bar': '100%',
        'car': '30px',
        'slider': '15px',
        'slider-thumb': '25px',
      },
      transitionProperty: {
        'progress-bar': 'width 0.1s',
        'car': 'left 0.1s',
        'slider': 'opacity 0.2s',
      },
      position: {
        'progress-container': 'relative',
        'progress-bar': 'absolute',
        'car': 'absolute',
      },
      inset: {
        'progress-bar-left': '0',
        'progress-bar-top': '0',
        'car-top': '50%',
      },
      transform: {
        'car': 'translateY(-50%)',
      },
      appearance: {
        'slider': 'none',
        'slider-thumb': 'none',
      },
      outline: {
        'slider': 'none',
      },
      opacity: {
        'slider': '0.7',
      },
      cursor: {
        'slider-thumb': 'pointer',
      },
    },
  },
  variants: {},
  plugins: [],
};
