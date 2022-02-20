import { ComponentStory, ComponentMeta } from '@storybook/react';
import config from '../../../__stories__/defaultContext';

import Pagination from '../index';
import { WonderEngineProvider } from '../../../context';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    current: { control: 'number', defaultValue: 1 },
    total: { control: 'number', defaultValue: 100 },
    pageSize: { control: 'number', defaultValue: 10 },
  },
} as ComponentMeta<typeof Pagination>;

export const Template: ComponentStory<typeof Pagination> = (args) => (
  <WonderEngineProvider config={config}>
    <Pagination {...args} hrefFormatter={(page) => `/link?page=${page}`} />
  </WonderEngineProvider>
);
