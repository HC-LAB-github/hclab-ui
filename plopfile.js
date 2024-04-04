export default function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'componentName',
      message: '请输入新建的组件名',
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{componentName}}/index.vue',
      templateFile: './internal/tenplate/index.hbs',
    }, {
      type: 'add',
      path: 'src/components//{{componentName}}/index.spec.ts',
      templateFile: './internal/tenplate/index.spec.hbs',
    }, {
      type: 'add',
      path: 'src/components/{{componentName}}/readme.md',
      templateFile: './internal/tenplate/readme.hbs',
    }],
  })
};
