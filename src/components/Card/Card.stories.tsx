import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta = {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    link: { control: 'text' },
    date: { control: 'text' },
    image: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'My Awesome Blog Post',
    link: 'https://example.com',
    date: 'October 22, 2023',
    image: 'https://via.placeholder.com/150',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Another Great Blog Post',
    link: 'https://example.com',
    date: 'October 23, 2023',
  },
};
