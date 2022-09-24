import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from './index';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    variant: 'red',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    variant: 'red',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const RedOrange = Template.bind({});
RedOrange.args = {
    children: 'Text',
    variant: 'red',
};
RedOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
