import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const TableContainer = styled.table`
  width: 85vw;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  justify-content: center;
  padding: 0 3.333vw;
  overflow-x: scroll;
  white-space: nowrap;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-400"]};
    border-right: 2px solid ${(props) => props.theme["gray-400"]};
    border-left: 2px solid ${(props) => props.theme["gray-400"]};
    text-transform: uppercase;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      text-align: right;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media ${breakpoints.xl} {
    white-space: normal;
    td {
      padding: 0.8rem;
      font-size: 0.8rem;
    }
    svg {
      width: 1.3rem;
    }
  }
  @media ${breakpoints.lg} {
    padding: 0;
    td {
      overflow-y: scroll;
      padding: 0.8rem;
      font-size: 0.8rem;
    }
  }
`;
