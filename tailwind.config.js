module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    },
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
          h2: {
            color: '#DD6B20',
          },
          h3: {
            color: '#DD6B20',
          },
          h4: {
            color: '#DD6B20',
          },
        },
      },
    },
    extend: {},
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {},
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
    require(`@tailwindcss/typography`)
  ]
}
