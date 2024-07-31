import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";
interface asideContainerProps {
  "data-state": boolean;
}
export const Container = styled.aside<asideContainerProps>`
  padding: 0.5rem;
  max-width: 60px;
  height: 80vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  position: fixed;
  left: 0;

  transform: translateX(0);
  @media ${breakpoints.lg} {
    z-index: 1000;
    min-width: 200px;
    height: 25vh;
    border-radius: 8px;
    background-color: ${(props) => props.theme["gray-400"]};
    transform: translateX(${(props) => (props["data-state"] ? "0" : "-100%")});
  }
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
  gap: 1rem;

  &:hover {
    background-color: ${(props) =>
      props.$variant == "true" ? null : props.theme["gray-500"]};
  }
  span {
    display: none;
  }
  @media ${breakpoints.lg} {
    width: 100%;
    padding: 0 1rem;
    justify-content: left;

    span {
      display: block;
    }
  }
`;
export const ToggleMenu = styled.button`
  display: none;
  width: 15px;
  height: 50%;
  background-color: ${(props) => props.theme["gray-400"]};
  border: 0;
  border-radius: 8px;
  position: fixed;
  right: -5%;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.2rem;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 100%;
    color: ${(props) => props.theme.white};
  }
  @media ${breakpoints.lg} {
    display: block;
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
