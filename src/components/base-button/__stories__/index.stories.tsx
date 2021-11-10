import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import config from '../../../__stories__/defaultContext';

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
  <WonderEngineProvider config={config}>
    <Button {...args} analytics={{ gtmEvent: 'button-click' }}>
      Submit
    </Button>
  </WonderEngineProvider>
);
