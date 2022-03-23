/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import moment from 'moment';

function PlanPresent({
  plan, openEditMenu, isEditPage, deletePlan, goToPlanDetailPage,
}) {
  const {
    planId, title, travelDestination, travelStart, travelEnd, members,
  } = plan;

  return (
    <li
      onClick={() => goToPlanDetailPage(plan)}
      className="bg-main text-white relative h-[115px] p-[18px] rounded-[20px]"
    >
      <h5 className="text-[18px] leading-[22px] font-[700]">{title}</h5>
      <span className="absolute left-[18px] bottom-[14px] text-[12px] leading-[14px] font-[600]">
        {`${travelDestination}, ${moment(travelStart).format('MMM YY')} - ${moment(travelEnd).format('MMM YY')}`}
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
      {isEditPage
        ? (
          <button
            onClick={() => deletePlan(planId)}
            type="button"
            className="absolute top-[18px] right-[18px]"
          >
            삭제
          </button>
        )
        : (
          <button
            onClick={() => openEditMenu({ plan, planId, title })}
            type="button"
            className="absolute top-[18px] right-[18px]"
          >
            버튼
          </button>
        )}

    </li>
  );
}

export default PlanPresent;
