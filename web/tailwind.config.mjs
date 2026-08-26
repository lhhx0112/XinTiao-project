import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D97757",
          dark: "#C25E3E",
          light: "#F6DFD2",
          faint: "#FBF0EA"
        },
        ink: {
          DEFAULT: "#0A0A0A",
          secondary: "#525252",
          muted: "#767673"
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAF7",
          cream: "#FDFBF8",
          line: "#E4E4DF"
        }
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Public Sans"', "Inter", '"PingFang SC"', '"Microsoft YaHei"', ...defaultTheme.fontFamily.sans],
        serif: ['"Noto Serif SC"', '"Songti SC"', '"Source Han Serif SC"', "serif"],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"]
      },
      borderRadius: {
        sm2: "8px",
        md2: "12px",
        lg2: "16px",
        xl2: "20px",
        "2xl2": "24px",
        pill: "9999px"
      },
      maxWidth: {
        content: "1200px"
      },
      boxShadow: {
        lift: "0 18px 40px -20px rgba(10,10,10,0.25)",
        liftLg: "0 24px 48px -12px rgba(10,10,10,0.30), 0 0 0 1px rgba(10,10,10,0.03)",
        liftSm: "inset 0 1px #fff, 0 10px 22px -8px rgba(10,10,10,0.16)",
        glow: "0 10px 30px rgba(217,119,87,0.28)",
        hairline: "0 0 0 1px rgba(10,10,10,0.04)"
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  }
};
