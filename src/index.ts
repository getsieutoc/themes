import type { ExtendedTheme } from './types';

import basic from './basic';
import minimalist from './minimalist';
// PLOP WILL APPEND NEW IMPORT HERE

const themes: Record<string, ExtendedTheme> = {
  basic,
  minimalist,
  // PLOP WILL APPEND NEW EXPORT HERE
};

export default themes;
