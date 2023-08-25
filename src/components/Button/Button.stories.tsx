import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "btn-lg", "btn-sm", "btn-xs"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Neutral: Story = {
  args: {
    variant: "btn-neutral",
  },
};

export const Secondary: Story = {
  args: {
    variant: "btn-secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "btn-success",
  },
};

export const Warning: Story = {
  args: {
    variant: "btn-warning",
  },
};

export const WarningLarge: Story = {
  args: {
    variant: "btn-warning",
    size: "btn-lg",
  },
};
