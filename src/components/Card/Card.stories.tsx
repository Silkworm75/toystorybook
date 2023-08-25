import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Card Title",
    text: "Some Text",
    buttonLabel: "Card Label",
    buttonLink: "https://stackoverflow.com/",
    compact: false,
    badge: "Card Badge",
    imgSrc: "https://picsum.photos/900/600",
    imgBottom: false,
    cardSide: false,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const CardSide: Story = {
    args: {
        cardSide: true
    }
};
