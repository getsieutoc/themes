const colorModeInLocalStorage =
  typeof window !== 'undefined'
    ? window.localStorage.getItem('chakra-ui-color-mode')
    : 'system';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: colorModeInLocalStorage === 'system',
};

export default config;
