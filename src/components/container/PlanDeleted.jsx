import { useState } from 'react';
import iconSet from '../../shared/imageUrl';

function PlanDeleted({ deletedPlan, restorePlan, deletePlanPermanently }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDeletedList = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <section className="mx-[20px] mt-[14px] bg-[#E7E6FE] px-[16px] py-[17px] rounded-[20px]">
      <div className="flex justify-between items-center">
        <span className="text-main text-[14px] leading-[17px]">최근 삭제된 계획</span>
        <button
          type="button"
          onClick={toggleDeletedList}
          className="text-main p-[3px]"
        >
          {isOpen
            ? <img src={iconSet.plan.openIcon} alt="삭제된 계획 닫기" className="w-[12px] h-[6px] rotate-180" />
            : <img src={iconSet.plan.openIcon} alt="삭제된 계획 열기" className="w-[12px] h-[6px]" />}
        </button>
      </div>
      {isOpen
        && (
        <div className="flex flex-col text-[14px] leading-[17px] font-[600]">
          <div className="w-full h-0.5 border-solid bg-white my-5" />
          <div className="flex flex-col gap-y-7">
            {
            deletedPlan.map((plan) => (
              <div key={plan.planId} className="flex justify-between">
                <span>{plan.title}</span>
                <div className="flex gap-x-[28px]">
                  <button
                    type="button"
                    onClick={() => deletePlanPermanently(plan.planId)}
                    className="text-[#F34A68]"
                  >
                    영구삭제
                  </button>
                  <button
                    type="button"
                    onClick={() => restorePlan({ planId: plan.planId })}
                    className="text-main"
                  >
                    복구
                  </button>
                </div>
              </div>
            ))
          }
          </div>
        </div>
        )}
    </section>
  );
}

export default PlanDeleted;
