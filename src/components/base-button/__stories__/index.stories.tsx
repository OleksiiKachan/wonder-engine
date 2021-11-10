import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../index';
import { WonderEngineProvider } from '../../../context';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    href: { control: 'text' },
    disabled: { control: 'boolean', defaultValue: false },
    loading: { control: 'boolean', defaultValue: false },
    loadingCaption: { control: 'text', defaultValue: 'Submitting' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => (
  <WonderEngineProvider
    config={{
      Link: 'a',
      analyticsHandler: (analytics) => {
        if (analytics) {
          if (analytics.gtmEvent) {
            console.log(`Analytics - GTM Event - ${analytics.gtmEvent}`);
          }
        }
      },
    }}
  >
    <Button {...args} analytics={{ gtmEvent: 'button-click' }}>
      Submit
    </Button>
  </WonderEngineProvider>
);
