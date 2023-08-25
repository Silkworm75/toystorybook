import Card from "@/components/Card/Card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "MISCEXAMPLES/DecoratorComponent",
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
  // Component decorators are a way to wrap a Component in extra rendering functionality.
  // Extra markup, accepts also functions
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", background: "red", padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export default meta;

export const Default: Story = {};
