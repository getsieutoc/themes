# @sieutoc/themes

A theme collection for Sieutoc site generator.

## Usage

Using pnpm (Recommended): 

```bash
pnpm i -E @sieutoc/themes
```

Then either use it directly with Chakra's theme Provider,

```bash
import themes from '@sieutoc/themes';
...
<ThemeProvider theme={themes['minimalist']}>
```

or extend it with your own theme.

```bash
import themes from '@sieutoc/themes';
...
const baseTheme = themes['minimalist'];

export const theme = extendTheme(baseTheme, yourCustomised);
```

## Developing

Clone the project

```bash
git clone git@github.com:websitesieutoc/themes.git
```

Go to the project directory

```bash
cd themes
```

Install dependencies

```bash
pnpm install
```

Start the server

```bash
pnpm dev
```

## Generators

We use `plop` for generating new theme.

```bash
// At the root of themes directory, run:
pnpm generate theme
```

After that, answer the prompt with a theme name, plop will generate a blank theme starter.

