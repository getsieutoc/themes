export default function(plop) {
  plop.setHelper('curly', (t) => `{${t}}`);
  plop.setHelper('lowerCase', (t) => t.toLowerCase());

  plop.setGenerator('theme', {
    description: 'New theme starter generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Theme name (e.g. fancyname)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}/components/index.ts',
        templateFile: 'plop/theme/components/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/{{name}}/foundations/colors.ts',
        templateFile: 'plop/theme/foundations/colors.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/{{name}}/config.ts',
        templateFile: 'plop/theme/config.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/{{name}}/index.ts',
        templateFile: 'plop/theme/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/{{name}}/styles.ts',
        templateFile: 'plop/theme/styles.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'modify',
        path: 'src/index.ts',
        pattern: /\/\/ PLOP WILL APPEND NEW IMPORT HERE\n/gm,
        templateFile: 'plop/modifyImport.hbs',
      },
      {
        type: 'modify',
        path: 'src/index.ts',
        pattern: /^\s{2}\/\/ PLOP WILL APPEND NEW EXPORT HERE\n/gm,
        templateFile: 'plop/modifyExport.hbs',
      },
    ],
  });
}
