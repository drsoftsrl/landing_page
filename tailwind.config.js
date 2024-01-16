/** @type {import('tailwindcss').Config} */
import {
  Accent,
  AccentContent, Base, BaseContent, GradientFeatures, GradientFooter, GradientHero,
  Neutral, NeutralContent,
  Primary,
  PrimaryContent,
  Secondary,
  SecondaryContent
} from "./projectSettings/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./styles/*.css"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient1': `linear-gradient(to right bottom, ${GradientHero.join(', ')})`,
        'gradient2': `radial-gradient(ellipse farthest-side at 100% 100%, ${GradientFeatures[0]} 10%, ${GradientFeatures[1]} 30%, ${GradientFeatures[2]} 109%)`,
        'gradient3': `radial-gradient(ellipse farthest-side at 100% 100%, ${GradientFooter[0]} 5%, ${GradientFooter[1]} 60%, ${GradientFooter[2]} 120%)`,
      },
      fontFamily: {
        'lato': ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        altBase: GradientHero[0]
      },
    }
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": Primary,
          "primary-content": PrimaryContent,
          "secondary": Secondary,
          "secondary-content": SecondaryContent,
          "accent": Accent,
          "accent-content": AccentContent,
          "neutral": Neutral,
          "neutral-content": NeutralContent,
          "base-100": Base,
          "base-content": BaseContent,

        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwind-scrollbar-hide"),
    require('tailwindcss-animated'),
    require("daisyui"),
  ],
}
