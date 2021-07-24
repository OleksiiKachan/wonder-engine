import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AspectRatioBox from '../index';

export default {
  title: 'Components/AspectRatioBox',
  component: AspectRatioBox,
  argTypes: {
    type: { control: 'select', options: ['1:1', '16:9'], defaultValue: '1:1' },
  },
} as ComponentMeta<typeof AspectRatioBox>;

export const Template: ComponentStory<typeof AspectRatioBox> = (args) => (
  <AspectRatioBox
    {...args}
    style={{ backgroundColor: 'red', width: '300px' }}
  />
);

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
