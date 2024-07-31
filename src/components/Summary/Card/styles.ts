import styled from "styled-components";
import breakpoints from "../../../styles/breakPoints";

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
    height: 78%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }

  @media ${breakpoints.xl} {
    span {
      font-size: 3rem;
    }
  }
  @media ${breakpoints.lg} {
    width: 100%;
    span {
      font-size: 4rem;
    }
  }
`;
