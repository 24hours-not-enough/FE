/* eslint-disable no-undef */
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BottomTab from '../elements/bottomTab';

function PlanDetailShareTab({
  tabState,
  setTabState,
}) {
  const { creator, roomId, title } = tabState.plan;
  let kakao;

  useEffect(() => {
    if (window.Kakao) {
      kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'TRIPLAN',
        description: `${creator.userName}님이 ${title}로 초대하셨습니다`,
        imageUrl: '/images/triplan_thumbnail.png',
        link: {
          mobileWebUrl: `https://triplan.co.kr/plan/invitation/${roomId}`,
        },
      },
      buttons: [
        {
          title: '초대 수락',
          link: {
            mobileWebUrl: `https://triplan.co.kr/plan/invitation/${roomId}`,
          },
        },
      ],
    });
  };

  const showMessage = () => {
    alert('링크가 복사되었습니다');
    setTabState(null);
  };

  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <h3 className="text-center mb-[48px] text-[20px] font-[800]">공유하기</h3>
      <div className="flex justify-center gap-x-[24px]">
        <button type="button" className="w-[48px] h-[48px] rounded-full bg-kakao" onClick={shareKakao}>
          <img src="/images/kakaoIcon.png" alt="카카오톡으로 공유하기" className="w-[30px] h-[30px] mx-auto" />
        </button>
        <CopyToClipboard
          text={`https://triplan.co.kr/plan/invitation/${roomId}`}
          onCopy={showMessage}
        >
          <button
            type="button"
            className="w-[48px] h-[48px] text-white bg-main font-[800] text-[18px] rounded-full"
          >
            URL
          </button>
        </CopyToClipboard>
      </div>
    </BottomTab>
  );
}

export default PlanDetailShareTab;
