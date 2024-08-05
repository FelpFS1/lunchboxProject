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
    border: 0;
    -webkit-box-shadow: 4px 3px 13px 1px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 4px 3px 13px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 4px 3px 13px 1px rgba(0, 0, 0, 0.47);
    text-align: center;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
`;
export const CalendarDateRange = styled(Date.DateRange)`
  width: 100%;
  background-color: ${(props) => props.theme["gray-300"]};

  border-radius: 8px;
  color: white;
  font-size: 1rem;

  input {
    border: 0;
    padding: 0;
    outline: none;
  }
  .rdrDateDisplayWrapper {
    background-color: transparent;
    span {
      background-color: transparent;
    }
  }
  .rdrMonthAndYearWrapper .rdrMonthAndYearPickers {
    span {
      select {
        font-weight: bold;
      }
    }
  }
  .rdrMonths .rdrMonth .rdrWeekDays {
    display: flex;
    gap: 0.8rem;
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
