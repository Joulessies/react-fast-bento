import { Meta } from '@storybook/react';
import Bento from '../components/Bento/Bento.tsx';

export default {
  title: 'React Fast Bento',
  component: Bento,
} as Meta;

const Template: Story = args => <Bento {...args} />;

export const Bento_Grid = ({ column, gaps, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${column}, 1fr)`,
    gap: `${gaps}px`,
  };
};

export const Bento_Layout = Template.bind({});
Bento_Layout.args = {
  title: 'Bento',
  description: 'React Fast Bento',
  size: 2,
};
