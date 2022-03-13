/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';

function MenuTab({ closeTab, goToLogin, isTab }) {
  if (isTab) {
    return (
      <div className="flex absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-400">
        <div className="absolute top-0 z-50 flex flex-col w-60 h-full bg-white shadow-2xl">
          <section
            className="absolute right-0 w-4 h-4"
            onClick={closeTab}
            tabIndex={0}
            role="button"
          >
            X
            {/* <img></img> 이미지 넣기 */}
          </section>
          <section className="w-full grid place-content-center h-40 border-b">
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
          <section className="">
            탐색, 내 여행 계획, 마이페이지 메뉴

          </section>
          <section>설정</section>
        </div>
      </div>
    );
  } return null;
}

export default memo(MenuTab);
