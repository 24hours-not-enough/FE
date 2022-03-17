function TriplanDate({
  subTitle, plan, selectBucket, selected,
}) {
  const isSelected = selected
    ? (selected.planId === plan.id && selected.calendarId === subTitle.id)
    : false;

  const handleClick = () => {
    selectBucket(plan, subTitle);
  };

  const buttonClass = isSelected
    ? 'inline-block text-[14px] font-[600] leading-[16.8px] w-[calc((100vw_-_90px)_/_3)] h-[36px] mb-[12px] bg-black text-white rounded-[15px]'
    : 'inline-block text-[14px] font-[600] leading-[16.8px] w-[calc((100vw_-_90px)_/_3)] h-[36px] mb-[12px] bg-[#E8E8E8] rounded-[15px] opacity-50 hover:opacity-100';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClass}
    >
      {subTitle.title}
    </button>
  );
}

export default TriplanDate;
