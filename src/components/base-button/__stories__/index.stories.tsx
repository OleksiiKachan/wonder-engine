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
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => (
  <WonderEngineProvider
    config={{
      Link: 'a',
    }}
  >
    <Button {...args}>Submit</Button>
  </WonderEngineProvider>
);
