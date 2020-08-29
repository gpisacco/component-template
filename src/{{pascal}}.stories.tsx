import React from 'react';

import {{pascal}} from '.';
import { {{pascal}}Props } from '.';
import notes from '../README.md';
import { Story } from '@storybook/react/types-6-0';


export default {
  title: 'Components/{{title}}',
  component: {{pascal}},
  controls: { expanded: true },
  parameters: { notes }
};

const Template: Story<{{pascal}}Props> = (args) => <{{pascal}} {...args} />;

export const BasicUsage = () => Template.bind({});

