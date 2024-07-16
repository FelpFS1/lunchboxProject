import styled from "styled-components";

export const Container = styled.div`
  width: 315px;
  height: 145px;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  text-align: center;
  padding: 0.5rem;

  header {
    width: 100%;
    text-transform: uppercase;
    font-size: 0.8rem;

    text-align: left;
  }

  span {
    font-size: 5rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`;
