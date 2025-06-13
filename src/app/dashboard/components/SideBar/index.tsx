"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";

import Image from "next/image";
export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState("Eventos");
  const [userName, setUserName] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onHandleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedUser = localStorage.getItem("user");

    if (!storedEmail && !storedUser) {
      window.location.href = "/";
    }

    setUserName(storedUser as string);
  }, []);

  return (
    <S.Sidebar className={sidebarOpen ? "open" : ""}>
      <S.MobileHeader>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <Image src="/icons/arrow-left.svg" alt={"Arrow Left"} />
          ) : (
            <Image src="/icons/hamburger-menu.svg" alt={"Hamburger Menu"} />
          )}
        </button>
        <h1>Dashboard</h1>
      </S.MobileHeader>
      <S.Menu>
        <S.LogoContainer>
          <Image src="/icons/tropa.svg" alt={"Tropa Digital"} />
        </S.LogoContainer>
        <S.MenuTitle>MENU</S.MenuTitle>
        <S.MenuItem
          isActive={activeMenu === "Dashboard"}
          onClick={() => setActiveMenu("Dashboard")}
        >
          <Image src="/icons/dashboard.svg" alt={"Dashboard"} />
          Dashboard
        </S.MenuItem>
        <S.MenuItem
          isActive={activeMenu === "Eventos"}
          onClick={() => setActiveMenu("Eventos")}
        >
          <Image src="/icons/events.svg" alt={"Eventos"} />
          Eventos
        </S.MenuItem>
        <S.MenuItem
          isActive={activeMenu === "Equipes"}
          onClick={() => setActiveMenu("Equipes")}
        >
          <Image src="/icons/teams.svg" alt={"Equipes"} />
          Equipes
        </S.MenuItem>
        <S.MenuItem
          isActive={activeMenu === "Inscricoes"}
          onClick={() => setActiveMenu("Inscricoes")}
        >
          <Image src="/icons/subscription.svg" alt={"Inscrições"} />
          Inscrições
        </S.MenuItem>
      </S.Menu>
      <S.UserArea>
        <S.UserInfo>
          <Image src="/icons/avatar.svg" alt={"Avatar"} />
          <div>
            <div>{userName}</div>
            <S.Role>Administrador</S.Role>
          </div>
        </S.UserInfo>
        <S.Actions>
          <S.Action>
            <Image src="/icons/profile.svg" alt={"Profile"} />
            Alterar dados
          </S.Action>
          <S.Action onClick={onHandleLogout}>
            <Image src="/icons/logout.svg" alt={"Logout"} />
            Sair
          </S.Action>
        </S.Actions>
      </S.UserArea>
    </S.Sidebar>
  );
}
