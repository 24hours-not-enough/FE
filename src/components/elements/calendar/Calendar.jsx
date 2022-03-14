import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar({ start, end }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <>
      <DatePicker
        ref={start}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="언제부터"
        dateFormat="yyyy.MM.dd"
        showPopperArrow={false}
        fixedHeight
      />
      <DatePicker
        ref={end}
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="언제까지"
        dateFormat="yyyy.MM.dd"
        showPopperArrow={false}
        fixedHeight
      />
    </>
  );
}

export default Calendar;
