import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
  <WonderEngineProvider
    config={{
      analyticsHandler: (analytics) => {
        if (analytics) {
          if (analytics.gtmEvent) {
            console.log(`Analytics - GTM Event - ${analytics.gtmEvent}`);
          }
        }
      },
    }}
  >
    <Toggle
      {...args}
      name="toggle-story"
      analytics={{ gtmEvent: 'toggle-on-change' }}
    >
      Submit
    </Toggle>
  </WonderEngineProvider>
);
