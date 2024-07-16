import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 48px;
  height: 36px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["gray-400"]};
  transition: all 0.2s ease-in-out;
  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    opacity: 0.8;
  }
`;
