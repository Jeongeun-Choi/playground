import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";
import { TabStyle, Type } from "./types";

interface TabProps {
  isActive?: boolean;
  tabName?: string;
  tabStyle?: TabStyle;
  type?: Type;
  itemKey?: string;
  onClickTab?: (e: MouseEvent<HTMLDivElement>) => void;
}

function Tab({
  isActive,
  tabName,
  tabStyle = "none",
  type = "primary",
  itemKey,
  onClickTab,
}: TabProps) {
  return (
    <TabContainer
      role="tab"
      data-key={itemKey}
      tabStyle={tabStyle}
      type={type}
      isActive={isActive}
      onClick={onClickTab}
    >
      {tabName}
    </TabContainer>
  );
}

export default Tab;

const TabContainer = styled.div<{
  tabStyle?: TabStyle;
  type?: Type;
  isActive?: boolean;
}>`
  width: 100px;
  height: 30px;
  text-align: center;
  ${({ tabStyle }) => {
    if (tabStyle === "outlined") {
      return css`
        border: 1px solid #767676;
        border-bottom: none;
      `;
    }
  }}

  color: ${({ isActive, type }) => {
    if (!isActive) {
      return "#434343";
    }
    if (type === "primary") {
      return "#1890ff";
    }

    if (type === "secondary") {
      return "#b37feb";
    }

    return "#fadb14";
  }}
`;
