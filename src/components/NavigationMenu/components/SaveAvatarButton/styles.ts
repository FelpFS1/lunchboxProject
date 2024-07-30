import styled from "styled-components";

export const SaveAvatarContainer = styled.button`
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
