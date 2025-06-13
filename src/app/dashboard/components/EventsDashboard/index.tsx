import Image from "next/image";
import { useState } from "react";
import { InsertButton } from "../insertButton";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";

export interface Evento {
  nome: string;
  equipes: number;
  status: string;
  data: string;
}
interface EventsDashboardProps {
  eventos: Evento[];
  onInsert: () => void;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function EventsDashboard({
  eventos,
  onInsert,
  onSearch,
}: EventsDashboardProps) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  return (
    <S.Content>
      <S.TableContainer>
        <S.TableHeader>
          <SearchBar
            placeholder="Buscar eventos"
            onChange={(e) => onSearch && onSearch(e)}
          />
          <InsertButton onClick={onInsert}>Inserir novo</InsertButton>
        </S.TableHeader>
        <S.Table>
          <thead>
            <tr>
              <th>Nome do evento</th>
              <th>Total de equipes</th>
              <th>Status</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento, index) => (
              <tr key={index}>
                <td>{evento.nome}</td>
                <td>{evento.equipes}</td>
                <td>
                  <S.Status>
                    <span
                      className={`dot ${
                        evento.status.toLocaleLowerCase() === "inativo"
                          ? "red"
                          : ""
                      }`}
                    />{" "}
                    {evento.status}
                  </S.Status>
                </td>
                <td>{evento.data}</td>
                <td>
                  <td>
                    <S.RowOptionsButton>
                      <Image
                        src="/icons/row-options.svg"
                        alt="Row Options Icon"
                      />
                    </S.RowOptionsButton>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
        <S.Pagination>
          <S.PreviousButton
            onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
          >
            Anterior
          </S.PreviousButton>
          {[1, 2, 3].map((num) => (
            <S.PageNumber
              key={num}
              active={paginaAtual === num}
              onClick={() => setPaginaAtual(num)}
            >
              {num}
            </S.PageNumber>
          ))}
          <S.NextButton onClick={() => setPaginaAtual((prev) => prev + 1)}>
            Próxima
          </S.NextButton>
        </S.Pagination>
      </S.TableContainer>
    </S.Content>
  );
}
