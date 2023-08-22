import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  args: {
    title: "Storybook Title",
    description: "Some Lorem Ipsum Text",
    bgImage: false,
    height: "full",
    bgImageOnly: false
  },
  argTypes: {
    bgColor: {
      control: { type: "color" },
    },
    bgImage: {
      control: "boolean",
    },
    height: {
      control: "radio",
      options: ["full", "half"],
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackgroundImage: Story = {
  args: {
    ...Default.args,
    bgImage: true,
  },
};

export const BackgroundImageOnly: Story = {
  args: {
    ...Default.args,
    bgImage: true,
    bgImageOnly: true,
  },
};

export const Height: Story = {
  args: {
    ...Default.args,
    height: "full",
  },
};
