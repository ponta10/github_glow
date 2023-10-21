import type { Meta, StoryObj } from "@storybook/react";
import { DesertScene } from "./DesertScreen";

const meta: Meta = {
  title: "Scenes/DesertScene",
  component: DesertScene,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    data: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: 0,
  },
};

export const SomeOtherVariant: Story = {
  args: {
    data: 850,
  },
};
