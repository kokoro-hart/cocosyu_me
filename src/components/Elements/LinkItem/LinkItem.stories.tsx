import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { LinkItem } from "./LinkItem";

export default { component: LinkItem } as ComponentMeta<typeof LinkItem>;

type Story = ComponentStoryObj<typeof LinkItem> & { args: ComponentProps<typeof LinkItem> };

export const Default: Story = {
  args: {},
};
