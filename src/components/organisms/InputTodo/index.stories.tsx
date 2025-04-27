import type { Meta, StoryObj } from '@storybook/react';
import { InputTodo } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'Organisms/InputTodo',
    component: InputTodo,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof InputTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
}