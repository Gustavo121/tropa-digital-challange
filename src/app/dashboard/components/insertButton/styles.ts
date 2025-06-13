import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  background-color: #cc6237;
  color: #ffffff;
  border-radius: 2.063rem;
  width: auto;
  height: 2.25rem;
  border: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 0.813rem;
  padding: 0 1rem;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  img {
    margin-right: 0.5rem;
  }

  @media (max-width: 600px) {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0rem;

    img {
      margin-right: 0;
    }
  }

  span {
    display: inline;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
