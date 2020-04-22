module.exports = {
  prompt: ({ prompter, args }) =>
    prompter.prompt({
      type: 'input',
      name: 'name',
      message: 'Component name (eg. TextInput)',
    }),
};
