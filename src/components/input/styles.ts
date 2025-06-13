import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const LabelText = styled.label`
  font-size: 0.813rem;
  font-weight: 600;
  color: #cc6237;
  margin-bottom: 0.5rem;
  display: block;
  font-family: var(--font-roboto);
`;

export const InputWrapper = styled.div<{ $hasIcon: boolean }>`
  position: relative;
  height: 2.5rem;
  display: flex;
  align-items: center;
  width: 100%;

  */
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 6.25rem;
  background-color: #f6f6f6;
  border: none;
  color: #657593;
  padding: 0.625rem 1.25rem;
  font-size: 0.75rem;
  font-family: var(--font-roboto);

  &:hover {
    cursor: text;
  }

  &:focus {
    outline: none;
    border: 1px solid rgb(201, 117, 83);
    box-shadow: 0 0 3px rgb(224, 123, 83);
  }

  &[data-input-type="password"],
  &[data-input-type="import"] {
    padding-right: 2.8rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #657593;
  height: 100%;
  cursor: pointer;
`;
