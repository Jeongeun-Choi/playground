import React from "react";
import "./App.css";
import Select from "./Select/Select";
import { Input } from "./Input";
import Tabs from "./Tabs/Tabs";

const list = [
  { id: 1, title: "사과" },
  { id: 2, title: "샤인머스켓" },
  { id: 3, title: "복숭아" },
  { id: 4, title: "자두" },
  { id: 5, title: "바나나" },
];

const TabItems = [
  { key: "hornet", tabName: "호넷", children: <div>콜라비 메인 서비스</div> },
  { key: "wasp", tabName: "와스프", children: <div>콜라비 와스프</div> },
  {
    key: "papyrus",
    tabName: "파피루스",
    children: <div>거지같은 파피루스</div>,
  },
];

function App() {
  return (
    // <Select>
    //   <Select.Toggle />
    //   <Select.List>
    //     {list.map((item) => (
    //       <Select.Option>{item.title}</Select.Option>
    //     ))}
    //   </Select.List>
    // </Select>
    // <Input label={"9시 22분"} errorText="에러" warnText="주의" width={400} />
    <Tabs items={TabItems} />
  );
}

export default App;
