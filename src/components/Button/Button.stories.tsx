import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: ["default", "btn-lg", "btn-sm", "btn-xs"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
