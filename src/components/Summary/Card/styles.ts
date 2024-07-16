import styled from "styled-components";

export const Container = styled.div`
  width: 21.615vw;
  height: 185px;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  padding: 0.5rem;

  header {
    width: 100%;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`;
