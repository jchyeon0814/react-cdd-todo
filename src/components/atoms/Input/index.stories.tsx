import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
    title: 'atoms/Input',
    component: Input,
    args: {

    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: '리액트 공부하기',
    }
}