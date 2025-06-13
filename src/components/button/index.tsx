import { ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};
