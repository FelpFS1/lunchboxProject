import styled from "styled-components";

export const HasFileContainer = styled.div`
  width: 100%;
`;

export const HasFileMain = styled.main`
  position: relative;
  width: 100%;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme["green-500"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  line-height: 0;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme["gray-300"]};
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme["gray-100"]};
  }
`;
export const SaveAvatarButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["green-500"]};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
