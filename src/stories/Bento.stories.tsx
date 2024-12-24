import { Meta, Story } from '@storybook/react';
import Bento from '../components/Bento/Bento.tsx';

export default {
  title: 'Bento Layout System',
  component: Bento,
} as Meta;

const Template: Story = args => <Bento {...args} />;

export const Bento_Layout = Template.bind({});
Bento_Layout.args = {
  title: 'Bento',
  description: 'Bento Grid Layout System',
  size: 0,
};
