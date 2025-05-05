import type { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from '.';

const meta = {
  title: 'atoms/PageTitle',
  component: PageTitle,
  args: {},
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 할일목록: Story = {
  args: {
    title: '할 일 목록',
  },
};

export const 할일추가: Story = {
  args: {
    title: '할 일 추가',
  },
};
