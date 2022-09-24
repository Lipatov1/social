import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button } from './index';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const FilledError = Template.bind({});
FilledError.args = {
    children: 'Text',
    variant: 'filled',
    color: 'error',
};

export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
    children: 'Text',
    variant: 'filled',
    color: 'success',
};

export const FilledDark = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};
FilledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledErrorDark = Template.bind({});
FilledError.args = {
    children: 'Text',
    variant: 'filled',
    color: 'error',
};
FilledErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledSuccessDark = Template.bind({});
FilledSuccess.args = {
    children: 'Text',
    variant: 'filled',
    color: 'success',
};
FilledSuccessDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledOrange = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};
FilledOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OutlineOrange = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const ClearOrange = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};
ClearOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const FilledErrorOrange = Template.bind({});
FilledError.args = {
    children: 'Text',
    variant: 'filled',
    color: 'error',
};
FilledErrorOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const FilledSuccessOrange = Template.bind({});
FilledSuccess.args = {
    children: 'Text',
    variant: 'filled',
    color: 'success',
};
FilledSuccessOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
