/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#c4c0ff",
        "on-surface-variant": "#464555",
        "outline": "#777587",
        "on-tertiary": "#ffffff",
        "secondary-fixed": "#84f5ee",
        "tertiary-fixed-dim": "#ffb785",
        "on-secondary-fixed": "#00201e",
        "surface-dim": "#d5dae1",
        "inverse-on-surface": "#ecf1f8",
        "tertiary-fixed": "#ffdcc6",
        "primary-fixed": "#e3dfff",
        "on-error-container": "#93000a",
        "surface-bright": "#f6f9ff",
        "inverse-primary": "#c4c0ff",
        "on-primary-fixed-variant": "#3622ca",
        "primary-container": "#675df9",
        "on-secondary-container": "#006f6a",
        "on-tertiary-container": "#fffbff",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "primary": "#4d41df",
        "on-error": "#ffffff",
        "tertiary": "#914800",
        "surface-container-high": "#e4e9f0",
        "surface-container": "#e9eef5",
        "error": "#ba1a1a",
        "secondary-fixed-dim": "#66d8d2",
        "background": "#f6f9ff",
        "secondary": "#006a66",
        "on-tertiary-fixed": "#301400",
        "on-primary-container": "#fffbff",
        "surface-container-highest": "#dee3ea",
        "surface": "#f6f9ff",
        "inverse-surface": "#2b3136",
        "surface-container-low": "#eff4fb",
        "on-primary-fixed": "#100069",
        "on-secondary": "#ffffff",
        "tertiary-container": "#b65c00",
        "on-background": "#171c21",
        "on-tertiary-fixed-variant": "#713700",
        "secondary-container": "#81f2eb",
        "on-surface": "#171c21",
        "surface-variant": "#dee3ea",
        "surface-tint": "#4f44e2",
        "outline-variant": "#c7c4d8",
        "on-secondary-fixed-variant": "#00504d"
      },
      borderRadius: {
        "32": "32px"
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "120px",
        "base": "8px",
        "container-padding": "32px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["DM Sans", "sans-serif"]
      },
      fontSize: {
        "display-hero": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "1.3", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" }]
      }
    }
  },
  plugins: []
}
