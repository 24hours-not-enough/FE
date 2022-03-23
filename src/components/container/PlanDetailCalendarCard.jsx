import PlanCalendarPlacePiece from './PlanCalendarPlacePiece';

function PlanDetailCalendarCard({ calendar, setOnUpdateTab }) {
  const { calendarId, title, calendarDetails } = calendar;

  const addCalendarPlace = () => {
    console.log('장소 추가하기 : 어떻게 하면 될지 생각해보자!');
    setOnUpdateTab({ type: 'add', calendarId });
  };

  return (
    <article className="bg-white rounded-[16px] p-[16px]">
      <h6 className="text-[15px] leading-[18px] font-[700] mb-[42px]">{title}</h6>
      <section className="flex flex-col items-start gap-y-[28px] mb-[16px]">
        {calendarDetails.map((place) => (
          <PlanCalendarPlacePiece
            key={place.calendarDetailId}
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
