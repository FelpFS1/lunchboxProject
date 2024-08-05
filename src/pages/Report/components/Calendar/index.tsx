import React, { useState } from "react";
import * as Styles from "./styles";
import addDays from "date-fns/addDays";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { Range } from "react-date-range";

export default function Calendar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleOpenCalendar = () => setIsOpen((status) => !status);
  return (
    <Styles.CalendarContainer onSubmit={handleSubmit}>
      <input
        type="text"
        value={`${format(
          range[0].startDate ?? new Date(),
          "dd/MM/yyyy"
        )} até ${format(range[0].endDate ?? new Date(), "dd/MM/yyyy")}`}
        onClick={handleOpenCalendar}
      />
      {isOpen && (
        <>
          <Styles.CalendarDateRange
            editableDateInputs
            moveRangeOnFirstSelection={false}
            ranges={range}
            onChange={(item) => setRange([item.selection])}
            months={1}
            locale={ptBR}
          />
          <Styles.ButtonsWrapper>
            <Styles.ButtonCalendar type="button" variant="cancel">
              Cancelar
            </Styles.ButtonCalendar>
            <Styles.ButtonCalendar type="submit" variant="generate">
              Gerar
            </Styles.ButtonCalendar>
          </Styles.ButtonsWrapper>
        </>
      )}
    </Styles.CalendarContainer>
  );
}
