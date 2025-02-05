import { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';import { ETheme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta =  {
    title: 'shared/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(ETheme.DARK)]
};
