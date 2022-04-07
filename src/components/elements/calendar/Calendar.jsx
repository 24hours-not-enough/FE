/* eslint-disable react/display-name */
import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar({ travelStartRef, travelEndRef }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const CustomInputStart = forwardRef(({
    value, onChange, onClick, placeholderText,
  }, ref) => (
    <button
      type="button"
      className="bg-[#E7E6FE] rounded-[16px] text-[12px] leading-[14px] font-[600] px-[14px] py-[13px] w-full"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      placeholder={placeholderText}
    >
      {value}
    </button>
  ));

  const CustomInputEnd = forwardRef(({
    value, onChange, onClick, placeholderText,
  }, ref) => (
    <button
      type="button"
      className="bg-[#E7E6FE] rounded-[16px] text-[12px] leading-[14px] font-[600] px-[14px] py-[13px] w-full"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      placeholder={placeholderText}
    >
      {value}
    </button>
  ));

  return (
    <div className="flex gap-x-[16px]">
      <DatePicker
        ref={travelStartRef}
        selected={startDate}
        placeholderText="언제부터"
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy.MM.dd"
        showPopperArrow={false}
        fixedHeight
        customInput={<CustomInputStart />}
      />
      <DatePicker
        ref={travelEndRef}
        selected={endDate}
        placeholderText="언제까지"
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy.MM.dd"
        showPopperArrow={false}
        fixedHeight
        customInput={<CustomInputEnd />}
      />
    </div>
  );
}

export default Calendar;
