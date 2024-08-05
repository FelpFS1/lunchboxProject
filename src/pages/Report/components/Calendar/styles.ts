import * as Date from "react-date-range";
import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const CalendarContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;

  input {
    width: 100%;
    background-color: transparent;
    padding: 0.6rem;
    color: white;
    border-radius: 8px;
    border: solid 1px black;
    padding-left: 2rem;
    outline: none;
  }
`;
export const CalendarDateRange = styled(Date.DateRange)`
  width: 100%;
  background-color: transparent;
  border: 1px solid;
  border-radius: 8px;
  color: white;
  input {
    background-color: ${(props) => props.theme["gray-100"]};
    border: none;
    padding: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

interface ButtonCalendarProps {
  variant: "cancel" | "generate";
}

export const ButtonCalendar = styled.button<ButtonCalendarProps>`
  width: 100%;
  padding: 0.7rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.variant === "cancel"
      ? props.theme["red-500"]
      : props.theme["green-500"]};

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.variant === "cancel"
        ? props.theme["red-700"]
        : props.theme["green-700"]};
  }
`;
