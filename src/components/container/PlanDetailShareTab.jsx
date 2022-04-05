/* eslint-disable no-undef */
import { useEffect } from 'react';
import BottomTab from '../elements/bottomTab';

function PlanDetailShareTab({
  tabState,
  setTabState,
}) {
  console.log(tabState);
  const { creator, roomId, title } = tabState.plan;
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }
    }
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'TRIPLAN',
        description: `${creator.userName}님이 ${title}로 초대하셨습니다`,
        imageUrl: '/images/triplan_thumbnail.png',
        link: {
          mobileWebUrl: `http://localhost:3000/plan/invitation/${roomId}`,
        },
      },
      buttons: [
        {
          title: '초대 수락',
          link: {
            mobileWebUrl: `http://localhost:3000/plan/invitation/${roomId}`,
          },
        },
      ],
    });
  };

  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <button type="button" onClick={shareKakao}>카카오톡 공유하기</button>
    </BottomTab>
  );
}

export default PlanDetailShareTab;
