"use client";

import React, { useState } from "react";
import * as S from "./styles";
import EyeIcon from "../../../public/icons/eye.svg";
import UploadIcon from "../../../public/icons/import.svg";

// ⭐ ADICIONE ESTES CONSOLE.LOGS AQUI ⭐
console.log("EyeIcon no componente Input:", EyeIcon);
console.log("Tipo de EyeIcon:", typeof EyeIcon);
console.log("UploadIcon no componente Input:", UploadIcon);
console.log("Tipo de UploadIcon:", typeof UploadIcon);
// ⭐ FIM DOS CONSOLE.LOGS ⭐


interface InputProps {
  label?: string;
  type?: "password" | "import" | "text" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
}

export const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onIconClick,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const needsIconSpace = type === "password" || type === "import";

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
    if (onIconClick && type === "password") {
      onIconClick();
    }
  };

  const inputHtmlType = type === "password" && showPassword ? "text" : type;

  const renderIcon = () => {
    if (type === "password") {
      return (
        <S.IconWrapper onClick={handleToggleShowPassword}>
          {/* Se você tiver um ícone diferente para o estado de "olho fechado" (EyeSlashIcon),
              importe-o da mesma forma e use-o aqui condicionalmente. */}
          <EyeIcon width={20} height={20} />
        </S.IconWrapper>
      );
    }
    if (type === "import") {
      return (
        <S.IconWrapper onClick={onIconClick}>
          <UploadIcon width={20} height={20} />
        </S.IconWrapper>
      );
    }
    return null;
  };

  const inputId = label
    ? label.toLowerCase().replace(/\s/g, "-")
    : `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <S.Container>
      {label && <S.LabelText htmlFor={inputId}>{label}</S.LabelText>}

      <S.InputWrapper $hasIcon={needsIconSpace}>
        <S.Input
          id={inputId}
          type={inputHtmlType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-input-type={type}
        />
        {renderIcon()}
      </S.InputWrapper>
    </S.Container>
  );
};