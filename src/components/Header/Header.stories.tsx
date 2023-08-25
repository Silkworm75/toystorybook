import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { userEvent } from "@storybook/testing-library";
const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    logo: true,
    nav: true,
    btn: true,
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoLogo: Story = {
  args: {
    logo: false,
  },
};

export const NoNav: Story = {
  args: {
    nav: false,
  },
};

export const NoBtn: Story = {
  args: {
    btn: false,
  },
};