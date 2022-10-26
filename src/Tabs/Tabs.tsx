import React, {
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import Tab from "./Tab";
import { Item, TabStyle, Type } from "./types";

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultActiveTab?: string;
  items: Item[];
  tabStyle?: TabStyle;
  type?: Type;
}

function Tabs({
  defaultActiveTab,
  items,
  tabStyle = "none",
  type = "primary",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>("");
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    if (!defaultActiveTab) {
      const firstTab = items[0];

      setActiveTab(firstTab.key);
      setContent(firstTab.children);
      return;
    }

    const item = items.find((item) => item.key === defaultActiveTab);

    if (!item) {
      return;
    }

    setActiveTab(item.key);
    setContent(item.children);
  }, [items, defaultActiveTab]);

  const handleClickTab = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      const key = e.currentTarget.dataset.key;

      if (!key) {
        return;
      }
      const item = items.find((item) => item.key === key);

      setActiveTab(key);
      setContent(item?.children);
    },
    [items]
  );

  return (
    <TabsContainer>
      <TabHeader>
        {items.map((item) => (
          <Tab
            key={item.key}
            itemKey={item.key}
            isActive={item.key === activeTab}
            tabName={item.tabName}
            tabStyle={tabStyle}
            type={type}
            onClickTab={handleClickTab}
          />
        ))}
      </TabHeader>
      <TabsContent>{content}</TabsContent>
    </TabsContainer>
  );
}

export default Tabs;

const TabsContainer = styled.div`
  width: 400px;
  height: 600px;
`;

const TabHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
const TabsContent = styled.div`
  margin: 4px 6px;
`;
