import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "My custom Storybook",
  brandUrl: "https://ibmix.de/en/",
  brandImage: "http://localhost:3000/logo.png",
  brandTarget: "_self",

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  
  // Colors
  colorPrimary: "#3A10E5",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
