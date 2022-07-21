import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './Rating';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Rating,
} as ComponentMeta<typeof Rating>;



export const Primary: ComponentStory<typeof Rating> = () => <Rating />