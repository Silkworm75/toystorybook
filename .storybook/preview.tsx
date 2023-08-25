import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { withBlackBorder, withMaxWidth } from './decorators';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addons } from "@storybook/manager-api";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      // Bonus INITIAL_VIEWPORTS
      viewports: INITIAL_VIEWPORTS,
    },
    nextjs: {
      appDirectory: true,
    },
    // staticDirs: ["../public"],
  },
  // BONUS decorators, order matters
  decorators: [withMaxWidth, withBlackBorder],
};

export default preview;
