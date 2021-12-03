const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}),${opacityValue} )`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        heading: "'Poppins', 'serif'",
        mono: ["'Open Sans'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        muted: withOpacity("--bg-muted"),
        primary: withOpacity("--bg-primary"),
        footer: withOpacity("--bg-footer"),
      },
      borderColor: {
        danger: withOpacity("--border-danger"),
      },
      // create custom gradient color here
      gradientColorStops: {
        hue: withOpacity("--color-fill"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {
      // backgroundColor: ['active'],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
