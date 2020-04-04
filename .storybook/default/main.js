module.exports = {
  stories: [
    '../../docs/get-started/*.stories.mdx',
    '../../docs/foundations/*.stories.mdx',
    '../../src/components/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
};
