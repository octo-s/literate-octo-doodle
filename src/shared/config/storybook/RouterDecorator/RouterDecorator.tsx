import { StoryFn } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn) => (
    <div>
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </div>
);