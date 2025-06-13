import styled from "styled-components";

export const Sidebar = styled.div`
  width: 13.125rem;
  background-color: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 600px) {
    position: fixed;
    left: -240px;
    top: 60px;
    bottom: 0;
    transition: left 0.3s ease;
    z-index: 9;

    &.open {
      left: 0;
    }
  }
`;

export const MobileHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  border-bottom: 1px solid #eee;
  display: none;
  align-items: center;
  padding: 0 16px;
  z-index: 10;

  button {
    background: none;
    border: none;
    margin-right: 12px;
  }

  h1 {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  padding: 1.875rem 0rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.text`
  font-weight: 800;
  font-size: 0.625rem;
  line-height: 0.938rem;
  letter-spacing: 12%;
  padding-left: 0.625rem;
  color: #a3a3a3;
`;

export const MenuItem = styled.div<{ isActive?: boolean }>`
  padding: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  border-radius: 0.313rem;
  width: 11.25rem;
  height: 2.188rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? "#fff" : "#252525")};
  background-color: ${({ isActive }) => (isActive ? "#CC6237" : "transparent")};
  margin-top: 0.438rem;
`;

export const UserArea = styled.div`
  padding-top: 1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  margin-right: 0.75rem;
`;

export const Role = styled.div`
  font-size: 0.75rem;
  color: gray;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Action = styled.div`
  padding: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #555;
  font-size: 0.875rem;
  cursor: pointer;
  div:hover {
    text-decoration: underline;
  }
`;
