import PlanCalendarPlacePiece from './PlanCalendarPlacePiece';

function PlanDetailCalendarCard({ calendar }) {
  const { calendarId, title, calendarDetails } = calendar;

  return (
    <article className="bg-white rounded-[16px] p-[16px]">
      <h6 className="text-[15px] leading-[18px] font-[700] mb-[42px]">{title}</h6>
      <section className="flex flex-col items-start gap-y-[28px] mb-[16px]">
        {calendarDetails.map((place) =>
          <PlanCalendarPlacePiece key={place.calendarDetailId} place={place} />)}
      </section>
      <button type="button" className="flex">
        <span className="inline-block bg-[#E7E6FE] w-[34px] h-[34px] rounded-full mr-[16px]">+</span>
        추가하기
      </button>
    </article>
  );
}

export default PlanDetailCalendarCard;
