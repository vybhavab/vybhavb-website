module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
daisyui: {
      themes: [
        {
        },
      ],
    },
    themes: ["emerald", {
      myThemeDark: {
        "primary": "#1EB854",
        "secondary": "#1FD65F",
        "accent": "#D99330",
        "neutral": "#374151",
        "base-100": "#111827",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }],
    darkTheme: "myThemeDark",
  }
}
