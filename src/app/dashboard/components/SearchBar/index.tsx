"use client";

import React from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
}

export const SearchBar = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <S.Container>
      <S.Icon src="/icons/search.svg" alt="Search Icon" />
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-input-type="text"
      />
    </S.Container>
  );
};
