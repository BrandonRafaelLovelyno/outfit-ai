import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
        '9/16': '9 / 16',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          dark: "#021526",
          normal: "#03346E",
          light: "#6EACDA",
        },
        secondary: "#F2F4F7",
        acent: {
          orange: {
            dark: "#DE8F5F",
            normal: "#FFB26F",
            light: "#FFB38E",
          },
          purple: {
            dark: "#2E073F",
            normal: "#7A1CAC",
            light: "#AD49E1",
          },
          teal: {
            dark: "#243642",
            normal: "#387478",
            light: "#629584",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
