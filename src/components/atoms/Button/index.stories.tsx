import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
    title: 'atoms/Button',
    component: Button,
    args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '추가',
    },
};

export const RedButton: Story = {
    args: {
        label: '삭제',
    },
};

export const BlueButton: Story = {
    args: {
        label: '추가',
        color: '#304FFE',
    },
};