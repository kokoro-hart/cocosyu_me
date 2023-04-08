import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { AppLayout } from "./AppLayout";

export default { component: AppLayout } as ComponentMeta<typeof AppLayout>;

type Story = ComponentStoryObj<typeof AppLayout> & { args: ComponentProps<typeof AppLayout> };

export const Default: Story = {
  args: {
    children: <div>AppLayout</div>,
  },
};
