"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as S from "./styles";

export default function Home() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserNameFromEmail = (email: string) => {
    const atIndex = email.indexOf("@");
    if (atIndex === -1) return email;
    return email.substring(0, atIndex);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onHandleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("* Por favor, preencha todos os campos.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("* Por favor, insira um e-mail válido.");
      return;
    }
    const userName = getUserNameFromEmail(email);
    localStorage.setItem("email", email);
    localStorage.setItem("user", userName);
    setError("");
    setIsLoading(true);
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedUser = localStorage.getItem("user");
    if (storedEmail && storedUser) {
      window.location.href = "/dashboard";
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = "/dashboard";
      }, 2000);
    }
  }, [isLoading]);

  return (
    <S.MainContainer>
      <S.CenterContainer>
        <S.LeftContainer>
          <Image src="/icons/tropa.svg" alt={"Tropa Digital"} />
          <S.TitleContainer>
            <S.Title>Bem-vindo de volta</S.Title>
            <S.Subtitle>Entre com sua conta para acessar o painel.</S.Subtitle>
          </S.TitleContainer>
          <S.formContainer>
            <Input
              label="E-mail"
              type="email"
              placeholder="seunome@seuservidor.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Digite aqui"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {isLoading && (
              <S.LoadingContainer>
                <S.Spinner />
              </S.LoadingContainer>
            )}
            {isLoading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button onClick={onHandleLogin}>Enviar</Button>
            )}
          </S.formContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.LoginImage src="/icons/login-icon.svg" alt={"Login Icon"} />
        </S.RightContainer>
      </S.CenterContainer>
    </S.MainContainer>
  );
}
