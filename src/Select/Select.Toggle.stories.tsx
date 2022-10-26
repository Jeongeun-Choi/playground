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
  title: "Example/Select.Toggle",
  component: Select.Toggle,
  argTypes: {
    placeholder: { type: "string" },
    type: { control: "select", options: ["none", "border"] },
    color: { control: "color" },
    borderColor: { control: "color" },
  },
} as ComponentMeta<typeof Select.Toggle>;

const Template: ComponentStory<typeof Select.Toggle> = (args) => {
  return <Select.Toggle {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "선택하세요.",
};

export const NonBorder = Template.bind({});

NonBorder.args = {
  placeholder: "테두리 없습니다.",
  type: "none",
};

export const CustomSelect = Template.bind({});

CustomSelect.args = {
  placeholder: "마음대로 커스텀 고고",
  color: "pink",
  borderColor: "pink",
};
