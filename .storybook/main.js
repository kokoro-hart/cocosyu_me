const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  typescript: {
    check: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src/"),
        },
      },
      define: {
        ...config.define,
        global: "window",
      },
    };
  },
  staticDirs: ['../public'],
};
