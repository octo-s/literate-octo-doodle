import { StoryFn } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
