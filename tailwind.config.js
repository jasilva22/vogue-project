module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      },
    extend: {
      spacing: {
        '5p': '5%',
      },
      aspectRatio: {
        'portrait': '3/4',
        'portrait-tall': '3/5',
        'landscape': '4/3',
      }
    }
  },
  plugins: [],
}