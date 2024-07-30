import { DropzoneState } from "react-dropzone";
import * as Styles from "./styles";
import { Upload } from "@phosphor-icons/react";
interface InputProps {
  dropzone: DropzoneState;
}
export default function Input({ dropzone }: InputProps) {
  const { getRootProps, isDragActive, getInputProps } = dropzone;
  return (
    <Styles.FileInputContainer {...getRootProps()} isDragActive={isDragActive}>
      <Styles.FileLabel htmlFor="dropzone-file">
        <Styles.FileContent>
          <Upload size={24} />
          {isDragActive ? (
            <p>Solte para enviar!</p>
          ) : (
            <p>
              <span>Clique para enviar</span> ou solte aqui.
            </p>
          )}
        </Styles.FileContent>
      </Styles.FileLabel>
      <input type="button" {...getInputProps()} />
    </Styles.FileInputContainer>
  );
}
