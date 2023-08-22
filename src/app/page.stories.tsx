import type { Meta, StoryObj } from "@storybook/react";
import Home from "./page";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const meta = {
  title: "Pages/Home",
  decorators: [
    () => (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Homepage: Story = {};
