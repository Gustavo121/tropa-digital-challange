import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #fafafa;
`;

export const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  justify-content: space-between;
`;

export const HeaderText = styled.text`
  color: #00000099;
  font-size: 1rem;
  padding-left: 30px;

  b {
    color: #000;
    font-weight: 700;
  }
`;

export const Header = styled.div`
  padding-left: 30px;
  h2 {
    color: #c65b1e;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 10px;
  gap: 10px;

  @media (max-width: 600px) {
    margin-top: 3.125rem;
    margin-bottom: -1.25rem;
  }
`;
