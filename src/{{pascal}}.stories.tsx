import React from 'react';

import {{pascal}} from '.';
import { {{pascal}}Props } from '.';
import notes from '../README.md';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/{{pascal}}',
  component: {{pascal}},
  controls: { expanded: true },
  parameters: { notes }
};

const Template: Story<{{pascal}}Props> = (args) => <{{pascal}} {...args} >{args.children}</{{pascal}}>;

export const BasicUsage = Template.bind({});

