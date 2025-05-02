import type { Meta, StoryObj } from '@storybook/react';

import { TodoListPage } from '.';

const meta = {
    title: 'pages/TodoListPage',
    component: TodoListPage,
    args: {

    }
} satisfies Meta<typeof TodoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    }
}