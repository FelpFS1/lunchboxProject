import styled from "styled-components";

export const Container = styled.aside`
  padding: 0.5rem;
  max-width: 60px;
  height: 80vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  position: fixed;
  left: 0;
`;
interface ButtonProps {
  variant?: boolean;
}
export const Button = styled.button<ButtonProps>`
  width: 41px;
  height: 41px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.variant ? props.theme["gray-100"] : props.theme["gray-400"]};
  border: 0;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.variant ? null : props.theme["gray-500"]};
  }
`;
