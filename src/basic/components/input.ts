const inputConfig = {
  variants: {
    expanding: () => ({
      field: {
        // Merge default styles
        // ...mode('light')(props).field,
        // ...mode('dark')(props).field,
        background: 'transperant',
        width: '50%',
        transition: 'width 0.3s',
        _focus: {
          width: '100%',
        },
      },
    }),
  },
};

export default inputConfig;
