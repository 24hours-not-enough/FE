/* eslint-disable no-undef */
import { useEffect } from 'react';
import BottomTab from '../elements/bottomTab';

function PlanDetailShareTab({
  tabState,
  setTabState,
}) {
  console.log(tabState);
  useEffect(() => {
    Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID);
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'triplan',
        description: '내용!',
        imageUrl: '/images/mock/1.jpg',
        link: {
          mobileWebUrl: '모바일 url!',
          androidExecParams: 'test',
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: '공유할 url!',
          },
        },
      ],
    });
  };

  return (
    <BottomTab>
      <button type="button" onClick={shareKakao}>카카오톡 공유하기</button>
    </BottomTab>
  );
}

export default PlanDetailShareTab;
