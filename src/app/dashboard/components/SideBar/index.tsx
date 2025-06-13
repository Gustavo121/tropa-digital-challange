"use client";

import { useEffect, useState } from "react";
import ArrowLeftIcon from "../../../../../public/icons/arrow-left.svg";
import AvatarIcon from "../../../../../public/icons/avatar.svg";
import DashBoardIcon from "../../../../../public/icons/dashboard.svg";
import EventsIcon from "../../../../../public/icons/events.svg";
import HamburgerIcon from "../../../../../public/icons/hamburger-menu.svg";
import LogoutIcon from "../../../../../public/icons/logout.svg";
import ProfileIcon from "../../../../../public/icons/profile.svg";
import SubscriptionIcon from "../../../../../public/icons/subscription.svg";
import EquipesIcon from "../../../../../public/icons/teams.svg";
import TropaIcon from "../../../../../public/icons/tropa.svg";
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
            <Image src={ArrowLeftIcon} alt={"Arrow Left"} />
          ) : (
            <Image src={HamburgerIcon} alt={"Hambuger Menu"} />
          )}
        </button>
        <h1>Dashboard</h1>
      </S.MobileHeader>
      <S.Menu>
        <S.LogoContainer>
          <Image src={TropaIcon} alt={"Tropa Digital"} />
        </S.LogoContainer>
        <S.MenuTitle>MENU</S.MenuTitle>
        <S.MenuItem
          isActive={activeMenu === "Dashboard"}
          onClick={() => setActiveMenu("Dashboard")}
        >
          <Image src={DashBoardIcon} alt={"Dashboard"} />
          Dashboard
        </S.MenuItem>
        <S.MenuItem
          isActive={activeMenu === "Eventos"}
          onClick={() => setActiveMenu("Eventos")}
        >
          <Image src={EventsIcon} alt={"Eventos"} />
          Eventos
        </S.MenuItem>
        <S.MenuItem
          isActive={activeMenu === "Equipes"}
          onClick={() => setActiveMenu("Equipes")}
        >
          <Image src={EquipesIcon} alt={"Equipes"} />
          Equipes
        </S.MenuItem>
        <S.MenuItem
          isActive={activeMenu === "Inscricoes"}
          onClick={() => setActiveMenu("Inscricoes")}
        >
          <Image src={SubscriptionIcon} alt={"Inscrições"} />
          Inscrições
        </S.MenuItem>
      </S.Menu>
      <S.UserArea>
        <S.UserInfo>
          <Image src={AvatarIcon} alt={"Avatar"} />
          <div>
            <div>{userName}</div>
            <S.Role>Administrador</S.Role>
          </div>
        </S.UserInfo>
        <S.Actions>
          <S.Action>
            <Image src={ProfileIcon} alt={"Profile"} />
            Alterar dados
          </S.Action>
          <S.Action onClick={onHandleLogout}>
            <Image src={LogoutIcon} alt={"Logout"} />
            Sair
          </S.Action>
        </S.Actions>
      </S.UserArea>
    </S.Sidebar>
  );
}
