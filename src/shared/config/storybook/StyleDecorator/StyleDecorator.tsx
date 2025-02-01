import { StoryFn } from '@storybook/react/*';

export const StyleDecorator = (Story: StoryFn) => (
    <div>
        <Story />
    </div>
);