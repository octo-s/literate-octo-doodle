import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import {Button, EButtonTheme} from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: EButtonTheme.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        children: 'Text',
        theme: EButtonTheme.OUTLINE,
    },
};
export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: EButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(ETheme.DARK)],
}