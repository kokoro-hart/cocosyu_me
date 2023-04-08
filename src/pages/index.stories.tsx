import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import Home from "./index";

export default { component: Home } as ComponentMeta<typeof Home>;

type Story = ComponentStoryObj<typeof Home> & { args: ComponentProps<typeof Home> };

export const Default: Story = {
  args: {},
};
