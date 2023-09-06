import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

// Global config for Chakra UI
import config from './config';

// Global style overrides
import styles from './styles';

// Foundational style overrides, most design tokens are defined here
import colors from './foundations/colors';
import borders from './foundations/borders';

// Component style overrides
import components from './components';

const overrides = {
  config,
  styles,
  colors,
  borders,
  components,
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'mycolor',
    components: ['Button'],
  })
);
