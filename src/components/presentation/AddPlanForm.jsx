import { memo } from 'react';

function AddPlanForm({ feed }) {
  const { feedDetail } = feed;

  if (feed.length !== 0) {
    return (
      <>
        {feedDetail.map(({ title, feedDetailLoc }) => (
          <div
            key={title}
            className="bg-white h-full p-5 pb-10 my-4 rounded-xl"
          >
            <div className="border-b pb-3 mb-5">
              <h1 className="font-bold">{title}</h1>
            </div>
            {feedDetailLoc.map(({ feedDetailLocImg, placeName, feedDetailLocId }, index) => (
              <div
                key={feedDetailLocId}
                className="w-80 h-40"
              >
                <div
                  style={{
                    width: '10px', height: '10px', left: '-5px', top: '-5px',
                  }}
                  className="relative bg-main rounded-full"
                />
                <div
                  className="relative top-19 -left-20 border-2 border-dashed w-40 rotate-90"
                />
                <ul className="relative -top-7 left-4">
                  {/* <button type="button">장소 추가하기</button> */}
                  <h1>{placeName}</h1>
                  <div className="absolute top-8 flex">
                    {feedDetailLocImg.map(({ imgId }) => (
                      <img key={imgId} alt="이미지" className="bg-main-background w-20 h-20 mr-2 rounded-xl" />
                    ))}
                    <div className="bg-main-background w-20 h-20 rounded-xl">사진추가 버튼</div>
                  </div>
                  <input className="absolute top-32 left-0" placeholder="자유롭게 기록해보세요" />
                  {feedDetailLoc[index + 1]
                    ? null
                    : <button className="absolute top-40 left-0" type="button">장소 추가하기</button>}
                  <div
                    style={{
                      width: '10px', height: '10px', top: '168px', left: '-21px',
                    }}
                    className="absolute bg-main rounded-full"
                  />
                </ul>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      className="bg-white h-full p-5 pb-10 my-4 rounded-xl"
    >
      <div className="border-b pb-3 mb-5">
        <h1 className="font-bold">장소 추가하기</h1>
      </div>
      <div
        className="w-80 h-40"
      >
        <div
          style={{
            width: '10px', height: '10px', left: '-5px', top: '-5px',
          }}
          className="relative bg-main rounded-full"
        />
        <div
          className="relative top-19 -left-20 border-2 border-dashed w-40 rotate-90"
        />
        <ul className="relative -top-7 left-4">
          {/* <button type="button">장소 추가하기</button> */}
          <input placeholder="장소 추가하기" className="text-main" />
          <div className="absolute top-8 flex">
            <img alt="이미지" className="bg-main-background w-20 h-20 mr-2 rounded-xl" />
            <div className="bg-main-background w-20 h-20 rounded-xl">사진추가 버튼</div>
          </div>
          <input className="absolute top-32 left-0" placeholder="자유롭게 기록해보세요" />
          <button type="button" className="absolute top-40 left-0 text-main">
            장소 추가하기
          </button>
          <div
            style={{
              width: '10px', height: '10px', top: '168px', left: '-21px',
            }}
            className="absolute bg-main rounded-full"
          />
        </ul>
      </div>
    </div>
  );
}

export default memo(AddPlanForm);
