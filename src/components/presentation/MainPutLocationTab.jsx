/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import Button from '../elements/button/Button';
import TriplanDate from './TriplanDate';

function MainPutLocationTab({ myTriplan }) {
  const [selected, setSelected] = useState(null);

  const selectBucket = (plan, sub) => {
    if (selected && selected.planId === plan.id && selected.calendarId === sub.id) {
      setSelected(null);
      return;
    }
    setSelected({ planId: plan.id, calendarId: sub.id });
  };

  // buttonType에 비활성화일 때 상태 추가하기
  const buttonType = selected ? 'main' : 'decline';

  const putLocationToTriplan = () => {
    // 내 트리플랜에 담기 - 담기 버튼 눌렀을 때 실행
    if (!selected) {
      return;
    }
    console.log(selected);
  };

  return (
    <section className="absolute transition-all duration-300 ease-out overflow-y-hidden w-full h-[390px] left-0 bottom-0 z-20 bg-white rounded-t-[30px] p-[30px]">
      <h5 className="text-[18px] font-[600] leading-[22px] mb-[40px]">내 트리플랜에 담기</h5>
      <ul className="max-h-[200px] overflow-y-auto mb-[36px] scrollbar-hide">
        {myTriplan.map((plan) => (
          <li key={plan.id} className="mb-[46px] cursor-pointer">
            <h6 className="text-[14px] leading-[16.8px] mb-[8px]">{plan.title}</h6>
            <div className="flex flex-wrap justify-between">
              {plan.list.map((subTitle) => (
                <TriplanDate
                  key={subTitle.id}
                  subTitle={subTitle}
                  plan={plan}
                  selectBucket={selectBucket}
                  selected={selected}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Button type={buttonType} onClick={putLocationToTriplan}>담기</Button>
    </section>
  );
}

export default MainPutLocationTab;
