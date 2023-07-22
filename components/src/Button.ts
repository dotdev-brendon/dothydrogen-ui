const Button = {
  baseStyle: {
    borderRadius: '0',
    _hover: {
      textDecoration: 'none',
    },
  },
  sizes: {
    md: {
      fontSize: '1rem',
      padding: '1.5rem 1.7rem',
    },
  },
  variants: {
    solid: {
      color: 'white',
      bg: 'brand.primary',
      border: '1px solid',
      borderColor: 'brand.primary',
      _hover: {
        bg: 'brand.dark',
        borderColor: 'brand.dark',
      },
      _active: {
        bg: 'brand.dark',
        borderColor: 'brand.dark',
      },
    },
    inverted: {
      bg: 'white',
      color: 'brand.primary',
      _hover: {
        bg: 'whiteAlpha.700',
      },
      _active: {
        bg: 'whiteAlpha.700',
      },
    },
    outline: {
      bg: 'white',
      color: 'brand.primary',
      border: '1px solid',
      borderColor: 'brand.primary',
      _hover: {
        bg: 'white',
        borderColor: 'blackAlpha.700',
      },
      _active: {
        bg: 'white',
        borderColor: 'blackAlpha.700',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default Button;
