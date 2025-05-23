import type { Meta, StoryObj } from '@storybook/react';

import { NotFound } from '.';

const meta = {
  title: 'Pages/NotFound',
  component: NotFound,
  args: {},
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
