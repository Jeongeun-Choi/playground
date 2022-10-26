import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isWarn?: boolean;
  label?: string;
  errorText?: string;
  warnText?: string;
}

function Input({
  isError,
  isWarn,
  id,
  label,
  errorText,
  warnText,
  width,
  className,
  ...restProps
}: InputProps) {
  return (
    <InputContainer width={width} isError={isError} isWarn={isWarn}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={className} {...restProps} />
      {isError && <span className="error">{errorText}</span>}
      {isWarn && <span className="warn">{warnText}</span>}
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div<{
  width?: string | number;
  isError?: boolean;
  isWarn?: boolean;
}>`
  display: flex;
  flex-direction: column;
  input {
    width: ${({ width }) => (width ? `${width}px` : "auto")};
    padding: 20px;
    border: 1px solid
      ${({ isError, isWarn }) =>
        isError ? "red" : isWarn ? "yellowgreen" : "black"};
  }

  .error {
    color: red;
  }

  .warn {
    color: yellowgreen;
  }
`;
