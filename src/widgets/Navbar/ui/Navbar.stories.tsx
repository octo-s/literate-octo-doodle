import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';import { Navbar } from './Navbar';
import {ETheme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    args: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(ETheme.DARK)],
};