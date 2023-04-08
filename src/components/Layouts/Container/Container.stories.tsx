import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { Container } from "./Container";

export default { component: Container } as ComponentMeta<typeof Container>;

type Story = ComponentStoryObj<typeof Container> & { args: ComponentProps<typeof Container> };

export const Default: Story = {
  args: {
    children: <div>Container</div>,
  },
};
