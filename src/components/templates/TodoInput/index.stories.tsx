import type { Meta, StoryObj } from '@storybook/react';
import { TodoInput } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'Templates/TodoInput',
    component: TodoInput,
} satisfies Meta<typeof TodoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
};