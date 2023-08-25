import Card from "@/components/Card/Card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "MISCEXAMPLES/DecoratorStory",
  component: Card,
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

type Story = StoryObj<typeof Card>;

export default meta;

export const Default: Story = {};

export const WithExtraMarkup: Story = {
  decorators: [
    (Story) => (
      <div>
        <h1>Custom Markup Start</h1>
        <Story />
        <h2>Custom Markup End</h2>
      </div>
    ),
  ],
};
