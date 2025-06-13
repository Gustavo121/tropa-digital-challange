import styled, { keyframes } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 37.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  animation: ${fadeInUp} 0.3s ease-out;

  h2 {
    margin-bottom: 0.5rem;
    color: #c65b1e;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    color: #333;
  }

  input {
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    font-size: 0.875rem;

    &:hover {
      opacity: 0.6;
    }

    &:focus {
      outline: none;
      border: 1px solid rgb(201, 117, 83);
      box-shadow: 0 0 3px rgb(224, 123, 83);
    }
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-size: 0.875rem;
    color: #333;
  }

  div {
    display: flex;
    gap: 1rem;

    input {
      margin-right: 0.25rem;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    font-size: 0.875rem;

    &:first-child {
      background: #eee;
      color: #333;
    }

    &:last-child {
      background: #cc6237;
      color: white;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;
