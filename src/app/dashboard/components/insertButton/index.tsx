import Image from "next/image";
import { ReactNode } from "react";
import PlusIcon from "../../../../../public/icons/plus.svg";
import * as S from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
export const InsertButton = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      <Image src={PlusIcon} alt={"Plus"} />
      <span>{children}</span>
    </S.Button>
  );
};
