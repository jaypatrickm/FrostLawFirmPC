module.exports = {
  theme: {
    extend: {
      colors: {
        'frost-blue': '#2c70ab',
        'frost-light-blue': '#6494c4',
        'frost-gray': '#9babb2',
        'frost-light-gray': '#e9ecee',
        'frost-dark-blue': '#235b86',
        'frost-darker-blue': '#153751',
        'frost-orange': '#F18F01',
        'frost-dark-orange': '#E28413',
        'frost-white': '#FBF5F3'
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
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'visited']
  },
  plugins: []
};
