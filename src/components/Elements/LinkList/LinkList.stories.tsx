import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { LinkList } from "./LinkList";

export default { component: LinkList } as ComponentMeta<typeof LinkList>;

type Story = ComponentStoryObj<typeof LinkList> & { args: ComponentProps<typeof LinkList> };

export const Default: Story = {
  args: {},
};
