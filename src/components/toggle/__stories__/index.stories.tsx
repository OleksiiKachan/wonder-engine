import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import config from '../../../__stories__/defaultContext';

import Toggle from '../';
import { WonderEngineProvider } from '../../../context';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Toggle>;

export const Template: ComponentStory<typeof Toggle> = (args) => (
  <WonderEngineProvider config={config}>
    <Toggle
      {...args}
      name="toggle-story"
      analytics={{ gtmEvent: 'toggle-on-change' }}
    >
      Submit
    </Toggle>
  </WonderEngineProvider>
);
