import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 85vw;
  margin: 2rem 0 0 0;

  display: flex;
  padding: 0 3.333vw;
  input {
    width: 82%;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 8px;
    border: 0;
    padding: 0.8rem;
    margin-right: 2rem;
    color: ${(props) => props.theme.white};
  }

  button {
    background-color: transparent;
    border: 1px solid;
    border-color: ${(props) => props.theme["gray-100"]};
    border-radius: 8px;
    color: ${(props) => props.theme["gray-100"]};
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme["gray-400"]};
    }
  }
`;
