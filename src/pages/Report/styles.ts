import styled from "styled-components";

export const ReportContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;
export const ReportTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
`;
export const ReportMain = styled.div`
  width: 100%;

  svg {
    color: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;
