import type { Meta, StoryObj } from '@storybook/react';

import { TodoInputPage } from '.';

const meta = {
  title: 'Pages/TodoInputPage',
  component: TodoInputPage,
  args: {},
} satisfies Meta<typeof TodoInputPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
