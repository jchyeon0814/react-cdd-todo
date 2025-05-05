import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta = {
  title: 'atoms/Label',
  component: Label,
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
  },
};
