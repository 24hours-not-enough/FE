/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import moment from 'moment';

function PlanPast({
  plan, openEditMenu, isEditPage, deletePlan, goToPlanDetailPage,
}) {
  const {
    planId, title, travelDestination, travelStart, travelEnd,
  } = plan;

  const handleOpenEditMenu = (e) => {
    e.stopPropagation();
    openEditMenu({ plan, planId, title });
  };

  return (
    <li
      onClick={() => goToPlanDetailPage(plan)}
      className="bg-white relative w-[calc((100%_-_16px)_/_2)] h-[136px] p-[18px] rounded-[20px]"
    >
      <h5 className="text-[14px] leading-[17px] font-[700]">{title}</h5>
      <span className="absolute left-[18px] bottom-[14px] text-[12px] leading-[14px] font-[600] text-[#E8E8E8]">
        {`${travelDestination}, ${moment(travelStart).format('MMM YY')} - ${moment(travelEnd).format('MMM YY')}`}

      </span>
      {isEditPage
        ? (
          <button
            onClick={() => deletePlan(planId)}
            type="button"
            className="absolute top-[18px] right-[18px]"
          >
            <img src="/images/planDeleteIcon.png" alt="delete" className="inline-block w-[18px] h-[18px]" />
          </button>
        )
        : (
          <button
            onClick={handleOpenEditMenu}
            type="button"
            className="absolute top-[18px] right-[18px]"
          >
            <img src="/images/menuIcon_black.png" alt="menu" className="inline-block w-[4px] h-[18px]" />
          </button>
        )}

    </li>
  );
}

export default PlanPast;
