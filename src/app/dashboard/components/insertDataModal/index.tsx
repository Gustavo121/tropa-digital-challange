"use client";

import { useState } from "react";
import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    nome: string;
    data: string;
    equipes: number;
    status: "Ativo" | "Inativo";
  }) => void;
}

export const InsertDataModal = ({ isOpen, onClose, onSave }: ModalProps) => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [equipes, setEquipes] = useState<number>(0);
  const [status, setStatus] = useState<"Ativo" | "Inativo">("Ativo");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  if (!isOpen) return null;

  const resetFields = () => {
    setNome("");
    setData("");
    setEquipes(0);
    setStatus("Ativo");
    setErrors({});
  };

  const handleSave = () => {
    const validationErrors = {
      nome: nome.trim() === "",
      data: data.trim() === "",
      equipes: equipes <= 0,
    };

    setErrors(validationErrors);

    const isValid = !Object.values(validationErrors).includes(true);
    if (!isValid) return;

    onSave({ nome, data, equipes, status });
    resetFields();
  };

  const handleCancel = () => {
    resetFields();
    onClose();
  };

  return (
    <S.Backdrop>
      <S.Container>
        <h2>Novo Evento</h2>

        <S.InputGroup>
          <label>Nome do evento *</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={errors.nome ? { borderColor: "red" } : {}}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Data *</label>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            style={errors.data ? { borderColor: "red" } : {}}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Total de equipes *</label>
          <input
            type="number"
            value={equipes}
            onChange={(e) => setEquipes(Number(e.target.value))}
            style={errors.equipes ? { borderColor: "red" } : {}}
          />
        </S.InputGroup>

        <S.RadioGroup>
          <label>Status *</label>
          <div>
            <label>
              <input
                type="radio"
                value="Ativo"
                checked={status === "Ativo"}
                onChange={() => setStatus("Ativo")}
              />
              Ativo
            </label>
            <label>
              <input
                type="radio"
                value="Inativo"
                checked={status === "Inativo"}
                onChange={() => setStatus("Inativo")}
              />
              Inativo
            </label>
          </div>
        </S.RadioGroup>

        <S.Footer>
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={handleSave}>Salvar</button>
        </S.Footer>
      </S.Container>
    </S.Backdrop>
  );
};
