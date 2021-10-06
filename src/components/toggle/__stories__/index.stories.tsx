import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from '../';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Toggle>;

export const Template: ComponentStory<typeof Toggle> = (args) => (
  <Toggle {...args} name="toggle-story">
    Submit
  </Toggle>
);
