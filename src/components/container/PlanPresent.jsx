/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import moment from 'moment';
import iconSet from '../../shared/imageUrl';

function PlanPresent({
  plan, openEditMenu, isEditPage, deletePlan, goToPlanDetailPage, userInfo,
}) {
  const {
    planId, title, travelDestination, travelStart, travelEnd, members, creator,
  } = plan;

  const handleOpenEditMenu = (e) => {
    e.stopPropagation();
    if (isEditPage) return;
    openEditMenu({ plan, planId, title });
  };

  return (
    <li
      onClick={() => goToPlanDetailPage(plan)}
      className="bg-main text-white relative h-[115px] p-[18px] rounded-[20px]"
    >
      <h5 className="text-[18px] leading-[22px] font-[700]">{title}</h5>
      <span className="absolute left-[18px] bottom-[14px] text-[12px] leading-[14px] font-[600]">
        {`${travelDestination}, ${moment(travelStart).format('MMM DD')} - ${moment(travelEnd).format('MMM DD')}`}
      </span>
      <div className="flex absolute right-[18px] bottom-[14px]">
        {members.map((member) => (
          <img
            key={member.userId}
            src={member.userProfileImage}
            alt={member.userName}
            className="w-[22px] h-[22px] rounded-full border-[1px] border-solid border-main"
          />
        ))}
      </div>
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
            <img src={iconSet.plan.menuIcon} alt="menu" className="inline-block w-5 h-5 px-2" />
          </button>
        )}

    </li>
  );
}

export default PlanPresent;
