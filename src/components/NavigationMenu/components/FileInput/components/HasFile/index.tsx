import { File, X } from "@phosphor-icons/react";
import * as Styles from "./styles";
interface HasFileProps {
  file: File;
  cancelDrop: () => void;
}
export default function HasFile({ file, cancelDrop }: HasFileProps) {
  return (
    <Styles.HasFileContainer>
      <Styles.HasFileMain>
        <Styles.CloseButton>
          <X size={24} onClick={() => cancelDrop()} />
        </Styles.CloseButton>
        <File size={24} />
        <span>{file.name}</span>
      </Styles.HasFileMain>
      <Styles.SaveAvatarButton>Salvar</Styles.SaveAvatarButton>
    </Styles.HasFileContainer>
  );
}
