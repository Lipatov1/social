import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLogo } from './index';

export default {
    title: 'shared/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
    <AppLogo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    size: 55,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    size: 55,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalOrange = Template.bind({});
NormalOrange.args = {
    size: 55,
};
NormalOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
