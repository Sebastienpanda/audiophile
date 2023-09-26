/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        footer: "#101010",
        card: "#F1F1F1",
        body: "#FAFAFA",
        hoverBtn: "#FBAF85",
        white: "#FFFFFF",
        black: "#000000",
        mobile: "#191919",
      },
      fontSize: {
        h1: [
          "3.5rem",
          {
            lineHeight: "58px",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        "h1-mobile": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0.08038rem",
            fontWeight: 700,
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "44px",
            letterSpacing: "1.429px",
            fontWeight: "700",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "36px",
            letterSpacing: "1.143px",
            fontWeight: "700",
          },
        ],
        h4: [
          "1.75rem",
          {
            lineHeight: "normal",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "normal",
            letterSpacing: "1.714px",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "normal",
            letterSpacing: "1.286px",
            fontWeight: "700",
          },
        ],
        overline: [
          "0.875rem",
          {
            lineHeight: "normal",
            letterSpacing: "0.625rem",
            fontWeight: 400,
          },
        ],
        subTitle: [
          "0.813rem",
          {
            lineHeight: "25px",
            letterSpacing: "0.929px",
            fontWeight: 700,
          },
        ],
        content: [
          "0.938rem",
          {
            lineHeight: "25px",
            fontWeight: 500,
          },
        ],
      },
    },
  },
  plugins: [],
};
