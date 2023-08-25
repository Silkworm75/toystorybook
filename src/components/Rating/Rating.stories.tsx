import { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

const meta = {
  title: "UI/Ratings",
  component: Rating,
  tags: ["autodocs"],
  args: {
    starStyle: "default",
    rating: 10,
  },
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Orange5: Story = {
    args: {
        starStyle: "orange",
        rating: 5
    }
};