module.exports = {
  theme: {
    extend: {
      colors: {
        'frost-blue': '#2c74ac',
        'frost-light-blue': '#6494c4',
        'frost-lightest-blue': '#ccdcec',
        'frost-gray': '#9cacb4',
        'frost-light-gray': '#e9ecee',
        'frost-dark-blue': '#235b86',
        'frost-darker-blue': '#153751'
      },
      spacing: {
        '72': '18rem'
      },
      flex: {
        sticky: '1 0 auto'
      },
      letterSpacing: {
        specialWide: '1.26em'
      },
      fontSize: {
        '2xs': '.375rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      borderWidth: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px'
      }
    }
  },
  variants: { backgroundColor: ['responsive', 'hover', 'focus', 'active'] },
  plugins: []
};
