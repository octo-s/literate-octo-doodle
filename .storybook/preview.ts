import type { Preview } from "@storybook/react";
import { ETheme } from 'app/providers/ThemeProvider';
import {StyleDecorator} from "shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouterDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(ETheme.NORMAL),
    RouterDecorator,

  ],
};

export default preview;