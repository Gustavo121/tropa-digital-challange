import Image from "next/image";
import EditMenuIcon from "../../../../../public/icons/edit-menu.svg";
import EyeMenuIcon from "../../../../../public/icons/eye-menu.svg";
import TrashIcon from "../../../../../public/icons/trash-menu.svg";
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
        <Image src={EyeMenuIcon} alt="Visualizar" />
        Visualizar
      </S.MenuItem>
      <S.MenuItem onClick={onEdit}>
        <Image src={EditMenuIcon} alt="Editar" />
        Editar
      </S.MenuItem>
      <S.MenuItem withoutBorder={true} className="red" onClick={onDelete}>
        <Image src={TrashIcon} alt="Excluir" />
        Excluir
      </S.MenuItem>
    </S.Container>
  );
}
