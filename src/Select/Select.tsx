import React, {
  createContext,
  MouseEvent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import styled, { css } from "styled-components";

interface SelectProps {}

interface ToggleProps {
  placeholder?: string;
  color?: string;
  type?: "border" | "none";
  borderColor?: string;
}

interface ListProps {}

const SelectContext = createContext({
  open: false,
  chosen: "",
  toggle: () => {},
});

function Toggle({
  placeholder = "눌러보세용",
  color,
  type = "border",
  borderColor,
}: ToggleProps) {
  const { toggle } = useContext(SelectContext);

  return (
    <ToggleContainer
      borderColor={borderColor}
      color={color}
      type={type}
      onClick={toggle}
    >
      {placeholder}
    </ToggleContainer>
  );
}

function Option({ children }: PropsWithChildren<ListProps>) {
  const { chosen } = useContext(SelectContext);

  return <li>{children}</li>;
}

function List({ children }: PropsWithChildren<ListProps>) {
  const { open } = useContext(SelectContext);

  return <>{open && <ul>{children}</ul>}</>;
}

function Select({ children }: PropsWithChildren<SelectProps>) {
  const [open, setOpen] = useState<boolean>(false);
  const [chosen, setChosen] = useState<string>("");

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClickItem = (e: MouseEvent<HTMLLIElement>) => {
    const element = e.currentTarget;

    const newValue = element.dataset.value;

    if (!newValue) {
      return;
    }

    setChosen(newValue);
  };

  return (
    <div>
      <SelectContext.Provider value={{ open, chosen, toggle }}>
        {children}
      </SelectContext.Provider>
    </div>
  );
}

Select.Option = Option;
Select.List = List;
Select.Toggle = Toggle;

export default Select;

const ToggleContainer = styled.div<Omit<ToggleProps, "placeholder">>`
  padding: 10px;
  ${({ type }) =>
    type !== "none" &&
    css`
      border: 1px solid;
    `}

  color: ${({ color }) => (color ? color : "#2d2d2d")};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "#2d2d2d")};
`;
