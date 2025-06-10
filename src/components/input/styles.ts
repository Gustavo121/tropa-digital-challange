// components/input/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 20.813rem;
`;

export const LabelText = styled.label`
  font-size: 0.813rem;
  font-weight: 600;
  color: #cc6237;
  margin-bottom: 0.5rem;
  display: block;
  font-family: var(--font-roboto);
`;

// AQUI: A prop '$hasIcon' é definida na tipagem
export const InputWrapper = styled.div<{ $hasIcon: boolean }>`
  position: relative;
  height: 2.5rem;
  display: flex;
  align-items: center;
  width: 100%;

  /* Você pode usar '$hasIcon' para estilos específicos no wrapper se precisar,
     mas no seu caso, o Input já lida com o padding. */
  /*
  ${props => props.$hasIcon && `
    border: 1px solid green; // Exemplo de estilo condicional no wrapper
  `}
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
    border: 1px solid #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  /* Aplica padding-right condicionalmente baseado no data-input-type */
  &[data-input-type='password'],
  &[data-input-type='import'] {
    padding-right: 2.8rem; /* Mais espaço à direita para o ícone */
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

  svg {
    cursor: pointer;
  }
`;