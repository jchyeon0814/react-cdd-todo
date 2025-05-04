import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';

const meta = {
    title: 'Organisms/Header',
    component: Header,
    parameters: {
        backgrounds: {
            default: 'Header background color',
            values: [{ name: 'Header background color', value: '#304ffe' }],
        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {

    },
};