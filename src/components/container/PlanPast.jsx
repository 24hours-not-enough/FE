/* eslint-disable react/no-array-index-key */
function PlanPast({ plan }) {
  const {
    planId, title, travelDestination, travelStart, travelEnd,
    isDeleted, members, calendars, checklist,
  } = plan;

  return (
    <li className="bg-white relative w-[calc((100%_-_16px)_/_2)] h-[136px] p-[18px] rounded-[20px]">
      <h5 className="text-[14px] leading-[17px] font-[700]">{title}</h5>
      <span className="absolute left-[18px] bottom-[14px] text-[12px] leading-[14px] font-[600] text-[#E8E8E8]">{`${travelDestination}, ${travelStart} - ${travelEnd}`}</span>
    </li>
  );
}

export default PlanPast;
