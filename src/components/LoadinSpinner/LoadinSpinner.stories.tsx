import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

const meta = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  args: {
    style: "loading-spinner",
    size: "default",
    color: "text-primary",
  },
  argTypes: {
    style: {
      control: "select",
      options: [
        "loading-spinner",
        "loading-dots",
        "loading-ring",
        "loading-ball",
        "loading-bars",
        "loading-infinity",
      ],
    },
    size: {
      control: "radio",
      options: [
        "default",
        "loading-xs",
        "loading-sm",
        "loading-md",
        "loading-lg",
      ],
    },
    color: {
      control: "select",
      options: [
        "text-primary",
        "text-secondary",
        "text-accent",
        "text-neutral",
        "text-info",
        "text-success",
        "text-warning",
        "text-error",
      ],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
