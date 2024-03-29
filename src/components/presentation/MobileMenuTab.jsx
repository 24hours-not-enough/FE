/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';
import iconSet from '../../shared/imageUrl';

function MobileMenuTab({
  closeTab, isTab, handleRouter, isUser,
}) {
  if (isTab) {
    return (
      <div className="flex absolute w-full h-screen max-h-[850px] top-0 left-0 right-0 bottom-0 z-50">
        <div className="absolute top-0 z-50 flex flex-col w-80 h-full bg-main-background shadow-2xl">
          <section
            className="absolute right-6"
            onClick={closeTab}
            tabIndex={0}
            role="button"
          >
            <img className="w-3 h-3 mt-6" alt="exit" src={iconSet.header.exitIcon} />
          </section>
          <section className="w-full grid place-content-center h-56">
            {isUser && isUser.userName
              ? (
                <>
                  <img src={isUser.userProfileImage} alt="프로필" className="w-20 h-20 rounded-full" />
                  <div className="text-center tabIndex={0}">{isUser.userName}</div>
                </>
              )
              : (
                <>
                  <div className="w-20 h-20 rounded-full bg-gray-400" />
                  <div
                    className="text-center"
                    role="button"
                    tabIndex={0}
                    onClick={handleRouter('/login')}
                  >
                    로그인
                  </div>
                </>
              )}

          </section>
          <section className="flex flex-col h-64 pt-4 border-y">
            <ul>
              <li
                role="presentation"
                onClick={handleRouter('/')}
                className="flex my-4"
              >
                <img className="ml-7 mr-4 w-6 h-6" alt="탐색 아이콘" src={iconSet.navBar.searchIcon} />
                <span>탐색</span>
              </li>
              {
                isUser && (
                <>
                  <li
                    onClick={handleRouter('/plan')}
                    className="flex my-4"
                  >
                    <img className="ml-7 mr-4 w-6 h-6" alt="탐색 아이콘" src={iconSet.navBar.planIcon} />
                    <span>내 여행 계획</span>
                  </li>
                  <li
                    onClick={handleRouter('/mypage')}
                    className="flex my-4"
                  >
                    <img className="ml-7 mr-4 w-6 h-6" alt="탐색 아이콘" src={iconSet.navBar.myPageIcon} />
                    <span>마이페이지</span>
                  </li>
                </>
                )
              }
            </ul>
          </section>
          <section className="flex flex-col h-64 mt-2">
            <div className="flex my-4" onClick={handleRouter('/mypage/settings')}>
              <img className="ml-7 mr-4 w-6 h-6" alt="탐색 아이콘" src={iconSet.navBar.settingIcon} />
              <span>설정</span>
            </div>
          </section>
        </div>
      </div>
    );
  } return null;
}

export default memo(MobileMenuTab);
