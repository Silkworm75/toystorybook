// Manager: theme Storybook globally
import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import MyTheme from "./CustomTheme";

addons.setConfig({
  // theme: themes.dark,
  theme: MyTheme,
});
