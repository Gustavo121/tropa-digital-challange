import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 0.625rem;
  box-shadow: 0px 6.25rem 12.5rem 0rem #00000040;
  border-radius: 1.25rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 24.25rem;
  padding: 0.625rem;
`;
export const RightContainer = styled.div`
  display: flex;
  background-color: #ffff;
  width: 22.188rem;
  height: 29.875rem;
  border-radius: 1.25rem;
  background-color: #cc6237;
  margin-left: 1.25rem;
  align-items: end;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LoginImage = styled(Image)`
  position: relative;
  left: -2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.188rem;
`;

export const formContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
`;

export const Title = styled.text`
  font-size: 1.625rem;
  font-weight: 700;
  color: #cc6237;
`;

export const Subtitle = styled.text`
  font-size: 0.813rem;
  font-weight: 400;
  color: #2a4d8e80;
`;

export const ErrorMessage = styled.text`
  font-size: 0.8rem;
  color: #ff0000;
  text-align: center;
  margin-bottom: 0.625rem;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid rgb(196, 77, 30);
  border-left-color: rgb(233, 226, 223);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 0.625rem;
`;
