import iconSet from '../../shared/imageUrl';

export default function WebMenuTab({ handleRouter }) {
  return (
    <div className="absolute flex flex-col w-72 h-full bg-gray-400 rounded-r-2xl">
      <div className="mt-14 mx-auto text-white">
        <div className="w-28 h-28 bg-white rounded-full" />
        <h1 className="text-center text-2xl text-bold">Name</h1>
      </div>
      {/* 아이콘 이미지들 */}
      <ul className="mx-auto mt-10">
        <li
          onClick={handleRouter('/login')}
          role="presentation"
          className="w-44 my-7"
        >
          <img className="inline w-10 h-10" alt="메인페이지" src={iconSet.webNavBar.mainPageIcon} />
          <span className="ml-4 text-white">메인페이지</span>
        </li>
        <li
          role="presentation"
          className="w-44 my-7"
        >
          <img className="inline w-10 h-10" alt="탐색" src={iconSet.webNavBar.searchIcon} />
          <span className="ml-4 text-white">탐색</span>
        </li>
        <li
          role="presentation"
          className="w-44 my-7"
        >
          <img className="inline w-10 h-10" alt="내 여행 계획" src={iconSet.webNavBar.planIcon} />
          <span className="ml-4 text-white">내 여행 계획</span>
        </li>
        <li
          role="presentation"
          className="w-44 my-7"
        >
          <img className="inline w-10 h-10" alt="마이페이지" src={iconSet.webNavBar.myPageIcon} />
          <span className="ml-4 text-white">마이페이지</span>
        </li>
      </ul>
      <div className="absolute bottom-10">
        <ul className="flex justify-around w-72">
          <li
            role="presentation"
          >
            <img className="inline w-10 h-10" alt="설정" src={iconSet.webNavBar.settingIcon} />
          </li>
          <li
            role="presentation"
          >
            <img className="inline w-10 h-10" alt="나가기" src={iconSet.webNavBar.exitIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
}
