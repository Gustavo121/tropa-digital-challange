"use client";

import Image from "next/image";
import React, { useState } from "react";
import EyeIcon from "../../../public/icons/eye.svg";
import EyeSlashIcon from "../../../public/icons/eye-slash.svg";
import * as S from "./styles";

interface InputProps {
  label?: string;
  type?: "password" | "text" | "email";
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
          {showPassword ? (
            <Image src={EyeSlashIcon} alt={""} />
          ) : (
            <Image src={EyeIcon} alt={""} />
          )}
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

      <S.InputWrapper $hasIcon={true}>
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
