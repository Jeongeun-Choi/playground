import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

const list = [
  { id: 1, title: "사과" },
  { id: 2, title: "샤인머스켓" },
  { id: 3, title: "복숭아" },
  { id: 4, title: "자두" },
  { id: 5, title: "바나나" },
];

export default {
  title: "Example/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
  return (
    <Select>
      <Select.Toggle placeholder="선택하세요." />
      <Select.List>
        {list.map((item) => (
          <Select.Option key={item.id}>{item.title}</Select.Option>
        ))}
      </Select.List>
    </Select>
  );
};

export const Primary = Template.bind({});
