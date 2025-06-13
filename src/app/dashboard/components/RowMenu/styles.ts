import styled from "styled-components";

export const Container = styled.div`
  width: 7.688rem;
  height: 6.563rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #0000000d;
  box-shadow: 0px 4px 4px 0px #0000000d;

  transition: opacity 0.2s ease-in-out;
`;

export const MenuItem = styled.div<{ withoutBorder?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.813rem;
  font-weight: 400;
  padding: 0.5rem;
  cursor: pointer;
  gap: 10px;
  &:hover {
    brightness: 0.9;
  }

  &.red {
    color: #ff0000;
  }

  border-bottom: ${({ withoutBorder }) =>
    withoutBorder ? "none" : "1px solid #0000000d"};

  &:hover {
    background-color: #f5f5f5;
  }
`;
