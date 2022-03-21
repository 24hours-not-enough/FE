function PlanCalendarPlacePiece({ place }) {
  console.log(place);
  const {
    order, locationName, locationMemo, latitude, longitude, calendarDetailId,
  } = place;

  return (
    <div className="flex h-[40px]">
      <div className="bg-black text-white rounded-full w-[22px] h-[22px] text-center text-[13px] leading-[20px] text-[600] mr-[22px]">
        {order}
      </div>
      <div className="flex flex-col gap-y-[6px]">
        <span className="text-[14px] leading-[17px]">{locationName}</span>
        <span className="text-[12px] leading-[14px] text-[#A0A0A0]">{locationMemo}</span>
      </div>
    </div>
  );
}

export default PlanCalendarPlacePiece;
