import { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(ETheme.DARK)]
};
