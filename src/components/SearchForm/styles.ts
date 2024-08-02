import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const SearchFormContainer = styled.form`
  width: 85vw;
  margin: 2rem 0 0 0;

  display: flex;
  padding: 0 3.333vw;
  gap: 1rem;
  align-items: center;
  input {
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 8px;
    border: 0;
    padding: 0.8rem;

    color: ${(props) => props.theme.white};
  }

  @media ${breakpoints.lg} {
    width: 100%;
    padding: 0;
    gap: 0.5rem;

    input {
      width: 80%;
      font-size: 0.8rem;
    }
  }
`;

export const SearchButton = styled.button`
  height: 50px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["gray-400"]};
  }
`;
