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
  $variant?: string;
}
export const Button = styled.button<ButtonProps>`
  width: 41px;
  height: 41px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$variant == "true"
      ? props.theme["gray-100"]
      : props.theme["gray-400"]};
  border: 0;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.$variant == "true" ? null : props.theme["gray-500"]};
  }
  span {
    display: none;
  }
`;

export const EditProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    img {
      width: 100px;
      border-radius: 100px;
    }

    button {
      width: 80px;
      background-color: transparent;
      border: 1px solid;
      padding: 0.2rem;
      font-size: 0.8rem;
      border-radius: 8px;
      cursor: pointer;
      color: ${(props) => props.theme.white};
    }
  }
`;
