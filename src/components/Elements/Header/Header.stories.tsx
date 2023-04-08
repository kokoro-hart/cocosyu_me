import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { Header } from "./Header";

export default { component: Header } as ComponentMeta<typeof Header>;

type Story = ComponentStoryObj<typeof Header> & { args: ComponentProps<typeof Header> };

export const Default: Story = {
  args: {},
};
