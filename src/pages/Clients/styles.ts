import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover";
import * as RadioGroup from "@radix-ui/react-radio-group";
import breakpoints from "../../styles/breakPoints";

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

  @media ${breakpoints.lg} {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.3rem;
  }
`;

export const PopoverContent = styled(Popover.Content)`
  border-radius: 8px;
  padding: 20px;
  width: 260px;
  background-color: ${(props) => props.theme["gray-400"]};

  text-align: center;
  h4 {
    margin-bottom: 1rem;
  }
`;

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${(props) => props.theme["gray-400"]};
`;

export const RadioRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RadioItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;

export const RadioIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.theme["gray-100"]};
  }
`;
export const PopoverButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;
export const FilterCustomerButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme["green-300"]};
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    background-color: ${(props) => props.theme["green-500"]};
  }
`;

export const CancelButton = styled(Popover.Close)`
  width: 100%;
  background-color: ${(props) => props.theme["red-300"]};
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    background-color: ${(props) => props.theme["red-500"]};
  }
`;
