import styled from "styled-components";

interface FileInput {
  isDragActive: boolean;
}

export const FileInputContainer = styled.div<FileInput>`
  width: 100%;
  border: dashed 2px
    ${(props) =>
      props.isDragActive ? props.theme["green-500"] : props.theme["gray-100"]};
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  input {
    display: none;
  }
  svg {
    color: ${(props) =>
      props.isDragActive ? props.theme["green-500"] : props.theme["gray-100"]};
  }
`;

export const FileLabel = styled.label`
  width: 50%;
`;

export const FileContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  span {
    font: bold;
    color: ${(props) => props.theme["gray-300"]};
  }
`;
