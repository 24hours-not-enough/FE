/* eslint-disable react/no-array-index-key */
function PlanPresent({
  plan, openEditMenu, isEditPage, deletePlan,
}) {
  const {
    planId, title, travelDestination, travelStart, travelEnd,
    isDeleted, members, calendars, checklist,
  } = plan;

  return (
    <li className="bg-main text-white relative h-[115px] p-[18px] rounded-[20px]">
      <h5 className="text-[18px] leading-[22px] font-[700]">{title}</h5>
      <span className="absolute left-[18px] bottom-[14px] text-[12px] leading-[14px] font-[600]">{`${travelDestination}, ${travelStart} - ${travelEnd}`}</span>
      <div className="flex absolute right-[18px] bottom-[14px]">
        {members.map((member, idx) => (
          <img
            key={idx}
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
            onClick={() => openEditMenu({ planId, title })}
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
