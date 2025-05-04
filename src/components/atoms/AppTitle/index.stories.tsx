import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AppTitle } from '.';

const meta = {
    title: "atoms/AppTitle",
    parameters: {
        backgrounds: {
            default: 'Header background color',
            values: [{ name: 'Header background color', value: '#304ffe' }],
        },
    },
    component: AppTitle,
    args: {

    }
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '할일목록앱',
    }
};