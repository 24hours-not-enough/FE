import PlanCalendarPlacePiece from './PlanCalendarPlacePiece';

function PlanDetailCalendarCard({ calendar, setOnUpdateTab }) {
  console.log(calendar);
  const { calendarId, days, calendarDetails } = calendar;
  const addCalendarPlace = () => {
    setOnUpdateTab({ type: 'add', calendarId });
  };

  return (
    <article className="bg-white rounded-[16px] p-[16px]">
      <h6 className="text-[15px] leading-[18px] font-[700] mb-[42px]">{days}</h6>
      <section className="flex flex-col items-start gap-y-[28px] mb-[16px]">
        {calendarDetails.map((place) => (
          <PlanCalendarPlacePiece
            key={place.sort}
            place={place}
            setOnUpdateTab={setOnUpdateTab}
            calendarId={calendarId}
          />
        ))}
      </section>
      <button type="button" className="flex" onClick={addCalendarPlace}>
        <span className="inline-block bg-[#E7E6FE] w-[34px] h-[34px] rounded-full mr-[16px]">+</span>
        일정 추가하기
      </button>
    </article>
  );
}

export default PlanDetailCalendarCard;
