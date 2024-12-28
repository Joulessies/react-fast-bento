import React from 'react';
import { BentoGrid } from './BentoGrid';

export default {
  title: 'Components/BentoGrid',
  component: BentoGrid,
};

const Template = args => <BentoGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: '16px',
  children: [
    <div key="1">Rice</div>,
    <div key="2">Salmon</div>,
    <div key="3">Edamame</div>,
  ],
};
