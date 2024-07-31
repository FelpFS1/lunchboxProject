import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const SummaryContainer = styled.section`
  width: 85vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: 2rem;

  @media ${breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    & :nth-child(3) {
      grid-column: span 2;
    }
  }
`;
