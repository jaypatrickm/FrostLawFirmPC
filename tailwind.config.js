module.exports = {
  theme: {
    extend: {
      colors: {
        'frost-blue': '#2c74ac',
        'frost-light-blue': '#6494c4',
        'frost-lightest-blue': '#ccdcec',
        'frost-gray': '#9cacb4',
        'frost-light-gray': '#e9ecee'
      },
      spacing: {
        '72': '18rem'
      },
      flex: {
        sticky: '1 0 auto'
      }
    }
  },
  variants: { backgroundColor: ['responsive', 'hover', 'focus', 'active'] },
  plugins: []
};
