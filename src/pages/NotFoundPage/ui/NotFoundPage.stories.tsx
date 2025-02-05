import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';import {ETheme} from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta =  {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(ETheme.DARK)]
};
