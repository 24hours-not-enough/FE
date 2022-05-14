import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _plan from '../../state/redux/plan/planSelector';
import Button from '../elements/button/Button';
import MainTriplanDateButton from '../elements/MainTriplanDateButton';
import PlanApi from '../../state/data/planApi';
import { getPlans } from '../../state/redux/plan/planThunk';

const planApi = new PlanApi();

function MainTriplanTab({ selectedPlace, setIsTriplanTab }) {
  const plan = useSelector(_plan);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  // Button type에 비활성화일 때 상태 추가하기
  const buttonStyle = selected ? 'main' : 'decline';

  const handleSelect = (data) => {
    if (selected && selected.planId === data.planId && selected.calendarId === data.planId) {
      setSelected(null);
    } else {
      setSelected(data);
    }
  };

  // 트리플랜에 장소 담기 - dispatch 작성하기
  const handlePlaceToTriplan = async () => {
    if (!selected) {
      return;
    }
    await planApi.placeToTriplan({
      planId: selected.planId,
      calendarId: selected.calendarId,
      placeData: {
        location: selectedPlace[0].locationName
          ? selectedPlace[0].locationName
          : selectedPlace[0].placeName,
        latitude: Number(selectedPlace[0].latitude),
        longitude: Number(selectedPlace[0].longitude),
      },
    })
      .then(() => {
        dispatch(getPlans());
        setIsTriplanTab(false);
        setSelected(null);
        alert('내 계획에 담기가 완료되었습니다.');
      })
      .catch(() => {
        alert('다시 시도해주세요.');
      });
  };

  return (
    <section className="absolute bottom-0 left-0 z-10 bg-white w-full rounded-t-[30px] px-[30px] pt-[30px]">
      <h5 className="text-[18px] font-[600] leading-[22px] mb-10">내 트리플랜에 담기</h5>
      <section className="w-full h-72 mb-8 flex flex-col gap-y-8 overflow-auto scrollbar-hide">
        {plan.map((triplan) => {
          if (triplan.delTc && triplan.travelEnd > new Date().toISOString()) {
            return (
              <section key={triplan.planId}>
                <h6 className="text-[14px] leading-[16.8px] mb-2">{triplan.title}</h6>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {triplan.calendars.map((calendar) => (
                    <MainTriplanDateButton
                      key={calendar.calendarId}
                      calendar={calendar}
                      selected={selected}
                      triplan={triplan}
                      handleSelect={handleSelect}
                    />
                  ))}
                </div>
              </section>
            );
          } return null;
        })}
      </section>
      <Button onClick={handlePlaceToTriplan} propsClassName="w-full mb-9" type={buttonStyle}>담기</Button>
    </section>
  );
}

export default MainTriplanTab;
