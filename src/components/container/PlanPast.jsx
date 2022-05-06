/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import moment from 'moment';
import iconSet from '../../shared/imageUrl';

function PlanPast({
  plan, openEditMenu, isEditPage, deletePlan, goToPlanDetailPage, userInfo,
}) {
  const {
    planId, title, travelDestination, travelStart, travelEnd, creator,
  } = plan;

  const handleOpenEditMenu = (e) => {
    e.stopPropagation();
    if (isEditPage) return;
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
      {(isEditPage && (userInfo.userId === creator.userId))
        ? (
          <button
            onClick={() => deletePlan({ planId })}
            type="button"
            className="absolute top-[18px] right-[18px]"
          >
            <img src={iconSet.plan.deleteIcon} alt="삭제" className="inline-block w-5 h-5" />
          </button>
        )
        : (
          <button
            onClick={handleOpenEditMenu}
            type="button"
            className="absolute top-[18px] right-[18px]"
          >
            <img src={iconSet.plan.menuBlackIcon} alt="menu" className="inline-block w-5 h-5" />
          </button>
        )}

    </li>
  );
}

export default PlanPast;
