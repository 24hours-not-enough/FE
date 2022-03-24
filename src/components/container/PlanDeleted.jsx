import { useState } from 'react';

function PlanDeleted({ deletedPlan }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDeletedList = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  console.log(deletedPlan);

  return (
    <section className="mx-[20px] mt-[14px] bg-[#E7E6FE] px-[16px] py-[17px] rounded-[20px]">
      <div className="flex justify-between items-center">
        <span className="text-main text-[14px] leading-[17px]">최근 삭제된 계획</span>
        <button
          type="button"
          onClick={toggleDeletedList}
          className="text-main"
        >
          열기
        </button>
      </div>
      <div className="flex flex-col gap-y-[30px] text-[14px] leading-[17px] font-[600]">
        {isOpen && deletedPlan.map((plan) => (
          <div key={plan.planId} className="flex justify-between">
            <span>{plan.title}</span>
            <div className="flex gap-x-[28px]">
              <button type="button" className="text-[#F34A68]">영구삭제</button>
              <button type="button" className="text-main">복구</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanDeleted;
