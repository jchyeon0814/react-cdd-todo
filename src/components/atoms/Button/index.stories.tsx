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