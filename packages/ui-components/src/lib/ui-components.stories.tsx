import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyOrgUiComponents } from './ui-components';

const meta = {
  component: MyOrgUiComponents,
  title: 'MyOrgUiComponents',
} satisfies Meta<typeof MyOrgUiComponents>;
export default meta;

type Story = StoryObj<typeof MyOrgUiComponents>;

export const Primary = {
  args: {},
} satisfies Story;
