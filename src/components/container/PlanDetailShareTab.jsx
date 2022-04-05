/* eslint-disable no-undef */
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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

  const showMessage = () => {
    alert('링크가 복사되었습니다');
  };

  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <h3 className="text-center mb-[48px] text-[20px] font-[800]">공유하기</h3>
      <div className="flex justify-center gap-x-[24px]">
        <button type="button" className="w-[48px] h-[48px] rounded-full" onClick={shareKakao}>카카오톡</button>
        <CopyToClipboard
          text={`http://localhost:3000/plan/invitation/${roomId}`}
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
