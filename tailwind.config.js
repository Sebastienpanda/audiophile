/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                tablet: "repeat(3, 1fr)",
                laptop: "repeat(3, 1fr)",
                "nav-center": "143px auto 143px",
                "nav-center-mobile": "1fr 143px 1fr",
                "center-element-left": "auto 1fr auto",
            },
            colors: {
                primary: "#D87D4A",
                footer: "#101010",
                card: "#F1F1F1",
                body: "#FAFAFA",
                hoverBtn: "#FBAF85",
                white: "#FFFFFF",
                black: "#000000",
                mobile: "#191919",
                "hover-btn": "#4C4C4C",
            },
            screens: {
                "1xl": "1440px",
            },
            fontSize: {
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "3.625rem",
                        letterSpacing: "0.125rem",
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
                        lineHeight: "2.75rem",
                        letterSpacing: "0.089rem",
                        fontWeight: "700",
                    },
                ],
                h3: [
                    "2rem",
                    {
                        lineHeight: "2.25rem",
                        letterSpacing: "0.07144rem",
                        fontWeight: "700",
                    },
                ],
                h4: [
                    "1.75rem",
                    {
                        lineHeight: "normal",
                        letterSpacing: "0.0625rem",
                        fontWeight: "700",
                    },
                ],
                h5: [
                    "1.5rem",
                    {
                        lineHeight: "normal",
                        letterSpacing: "0.107rem",
                        fontWeight: "700",
                    },
                ],
                h6: [
                    "1.125rem",
                    {
                        lineHeight: "normal",
                        letterSpacing: "0.08038rem",
                        fontWeight: "700",
                    },
                ],
                shop: [
                    "0.8125rem",
                    {
                        lineHeight: "normal",
                        letterSpacing: "0.063rem",
                        fontWeight: 700,
                    },
                ],
                "link-nav": [
                    "0.8125rem",
                    {
                        lineHeight: "1.5625rem",
                        letterSpacing: "0.125rem",
                        fontWeight: 700,
                    },
                ],
                "title-shop": [
                    "0.9375rem",
                    {
                        lineHeight: "1.5625rem",
                        fontWeight: "500",
                    },
                ],
                "title-nav": [
                    "0.9375rem",
                    {
                        lineHeight: "normal",
                        letterSpacing: "0.06694rem",
                        fontWeight: 700,
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
                        lineHeight: "1.563rem",
                        letterSpacing: "0.058rem",
                        fontWeight: 700,
                    },
                ],
                content: [
                    "0.938rem",
                    {
                        lineHeight: "1.563rem",
                        fontWeight: 500,
                    },
                ],
            },
        },
    },
    plugins: [],
}
