import { Meta, StortObj } from '@storybook/react';
import { Bento } from './Bento.ts';

const meta: Meta<typeof Bento> = {
  component: Bento,
};

export default meta;

type Story = StortObj<typeof Bento>;

export const Default: Story = {
  args: {
    dataType: 'latency',
    showBentoLabels: true,
    BentoBorderRadius: '20px',
    label: 'Label distribution',
  },
};
