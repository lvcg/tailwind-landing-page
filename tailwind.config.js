module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 66%)',
        brightRedSupLight: 'hsl(12, 88%, 80%)',
        darkBlue: 'hsl(210, 100%, 26%)',
        darkGrayishBlue: 'hsl(210, 100%, 23%)',
        veryDarkBlue: 'hsl(210, 100%, 20%)',
        veryPaleRed: 'hsl(0, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 96%)',
    },
  },
 },
  plugins: [],
}
