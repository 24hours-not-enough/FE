function MainTriplanDateButton({
  calendar, selected, triplan, handleSelect,
}) {
  const isSelected = selected
    ? (selected.planId === triplan.planId && selected.calendarId === calendar.calendarId)
    : false;

  const buttonStyle = isSelected
    ? 'bg-black text-white rounded-[15px]'
    : 'bg-[#E8E8E8] rounded-[15px] opacity-50 hover:opacity-100';

  return (
    <button
      className={`inline-block text-[14px] font-[600] leading-[16.8px] w-[calc((100%_-_32px)_/_3)] h-[36px] ${buttonStyle}`}
      type="button"
      onClick={() => handleSelect({
        planId: triplan.planId,
        calendarId: calendar.calendarId,
      })}
    >
      {calendar.days}
    </button>
  );
}

export default MainTriplanDateButton;
