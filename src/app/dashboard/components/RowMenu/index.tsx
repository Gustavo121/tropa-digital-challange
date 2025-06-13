import Image from "next/image";
import * as S from "./styles";

interface RowMenuProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}
export default function RowMenu({ onDelete, onEdit, onView }: RowMenuProps) {
  return (
    <S.Container>
      <S.MenuItem onClick={onView}>
        <Image src="/icons/eye-menu.svg" alt="Visualizar" />
        Visualizar
      </S.MenuItem>
      <S.MenuItem onClick={onEdit}>
        <Image src="/icons/edit-menu.svg" alt="Editar" />
        Editar
      </S.MenuItem>
      <S.MenuItem withoutBorder={true} className="red" onClick={onDelete}>
        <Image src="/icons/trash-menu.svg" alt="Excluir" />
        Excluir
      </S.MenuItem>
    </S.Container>
  );
}
