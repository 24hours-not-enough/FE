/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';

function MenuTab({ closeTab, goToLogin, isTab }) {
  if (isTab) {
    return (
      <div className="absolute top-0 flex flex-col w-60 h-full bg-white z-50">
        <section
          className="absolute right-0 w-4 h-4"
          onClick={closeTab}
          tabIndex={0}
          role="button"
        >
          X
          {/* <img></img> 이미지 넣기 */}
        </section>
        <section className="w-full grid place-content-center h-40">
          <div
            className="w-20 h-20 rounded-full bg-gray-400"
          />
          <div
            className="text-center"
            role="button"
            tabIndex={0}
            onClick={goToLogin}
          >
            로그인
          </div>
        </section>
        <section>탐색, 내 여행 계획, 마이페이지 메뉴</section>
        <section>설정</section>
      </div>
    );
  } return null;
}

export default memo(MenuTab);
