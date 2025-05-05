import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from '.';
import { fn } from '@storybook/test';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Templates/TodoList',
  component: TodoList,
  args: {
    onDelete: fn(),
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todoList: ['리액트 공부하기', 'CDD공부하기'],
  },
};
