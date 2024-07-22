import styled from "styled-components";

export const ClientsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const OptionsContainer = styled.section`
  width: 100%;

  padding: 0 3.333vw;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 2.25rem;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-400"]};
  text-align: center;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const AddCustomerButton = styled.button`
  height: 50px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  padding: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["gray-400"]};
  }
`;

export const TdButtons = styled.td`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;
  color: ${(props) => props.theme.white};
  :hover {
    color: ${(props) => props.theme["gray-100"]};
  }
  svg {
    cursor: pointer;
  }
`;
