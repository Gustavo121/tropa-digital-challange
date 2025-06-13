import styled from "styled-components";

export const Button = styled.button`
  background-color: #cc6237;
  color: #ffffff;
  padding: 0.625rem 1.563rem;
  border-radius: 6.25rem;
  width: 100%;
  height: 2.5rem;
  border: none;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
