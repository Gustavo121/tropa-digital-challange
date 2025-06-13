"use client";

import { useCallback, useEffect, useState } from "react";
import EventsDashboard, { Evento } from "./components/EventsDashboard";
import { InsertDataModal } from "./components/insertDataModal";
import SideBar from "./components/SideBar";
import * as S from "./styles";

export default function Dashboard() {
  const [user, setUser] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");

  const [allEventos, setAllEventos] = useState<Evento[]>([
    {
      nome: "Clube do Laço Coração Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      nome: "Festival de inverno Recinto de Exposições",
      equipes: 5,
      status: "Inativo",
      data: "25 a 27 de Junho",
    },
    {
      nome: "São João do Bairro Central",
      equipes: 7,
      status: "Ativo",
      data: "24 a 25 de Junho",
    },
  ]);

  const [eventos, setEventos] = useState<Evento[]>(allEventos);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onSave = (data: {
    nome: string;
    data: string;
    equipes: number;
    status: "Ativo" | "Inativo";
  }) => {
    const newEvent = {
      nome: data.nome,
      equipes: data.equipes,
      status: data.status,
      data: data.data,
    };

    setAllEventos((prev) => [...prev, newEvent]);
    setEventos((prev) => [...prev, newEvent]);
    setIsModalOpen(false);
  };

  const onInsert = () => {
    setIsModalOpen(true);
  };

  const onSearch = useCallback(
    (term: string) => {
      setSearchTerm(term);

      if (term.trim() === "") {
        setEventos(allEventos);
      } else {
        const filtered = allEventos.filter((evento) =>
          evento.nome.toLowerCase().includes(term.toLowerCase())
        );
        setEventos(filtered);
      }
    },
    [allEventos]
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <S.Container>
      <InsertDataModal isOpen={isModalOpen} onClose={onClose} onSave={onSave} />
      <SideBar />
      <S.DashContainer>
        <S.HeaderTextContainer>
          <S.HeaderText>
            Bem vindo de volta, <b>{user}</b>
          </S.HeaderText>
          <S.Header>
            <h2>Todos eventos</h2>
          </S.Header>
        </S.HeaderTextContainer>
        <EventsDashboard
          eventos={eventos}
          onInsert={onInsert}
          onSearch={(e) => onSearch(e.target.value)}
        />
      </S.DashContainer>
    </S.Container>
  );
}
