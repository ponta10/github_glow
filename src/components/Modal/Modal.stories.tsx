import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";

const meta: Meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: { control: "boolean" },
    width: { control: "text" },
    onClose: { action: "closed" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: "Hello, I am a Modal",
  },
};

export const CustomWidth: Story = {
  args: {
    open: true,
    children: "I am a Modal with a custom width",
    width: 600,
  },
};
