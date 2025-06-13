import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  position: relative;
  width: 12.688rem;
  height: 2.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 6.25rem;
  background-color: #f6f6f6;
  border: none;
  padding: 0.625rem 1.25rem 0.625rem 2.5rem;
  font-weight: 500;
  font-size: 0.813rem;
  font-family: var(--font-roboto);
  color: #000000;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    border: 1px solid rgb(201, 117, 83);
    box-shadow: 0 0 3px rgb(224, 123, 83);
  }
`;

export const Icon = styled(Image)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  pointer-events: none;
`;
