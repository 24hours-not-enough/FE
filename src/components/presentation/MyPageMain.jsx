import iconSet from '../../shared/imageUrl';

function MyPageMain({ handleRouter, userInfo, myFeed }) {
  const { userName, userProfileImage } = userInfo;
  return (
    <>
      <div className="flex flex-row justify-between mt-6">
        <div
          role="button"
          tabIndex={0}
          onClick={handleRouter('/mypage/profile')}
          className="flex justify-center items-center ml-5"
        >
          <img alt="유저이미지" src={userProfileImage} className="w-16 h-16 rounded-full bg-main" />
          <h1 className="text-xl ml-4">
            {userName}
          </h1>
        </div>
        <div className="flex justify-center items-center mr-5">
          <div
            style={{ backgroundColor: '#E7E6FE' }}
            className="grid place-items-center w-10 h-10 rounded-full mr-5"
          >
            <img className="w-5 h-5" alt="아이콘1" src={iconSet.myPage.rectangleIcon} />
          </div>
          <div
            style={{ backgroundColor: '#E7E6FE' }}
            className="grid place-items-center w-10 h-10 rounded-full"
            role="button"
            tabIndex={0}
            onClick={handleRouter('/mypage/mylike-feeds')}
          >
            <img
              className="w-6 h-6"
              src={iconSet.myPage.heartIcon}
              alt="아이콘2"
            />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: '#E7E6FE' }}
        className="w-10 h-10 ml-5 mt-10 rounded-full text-center text-2xl text-main leading-10"
        role="button"
        tabIndex={0}
        onClick={handleRouter('/mypage/plan')}
      >
        +
      </div>
      {myFeed.map(({
        day, travelStart, travelEnd, feedId,
      }) => (
        <div key={feedId} className="flex flex-col justify-center my-5 mx-3 bg-white rounded-lg">
          <div className="w-88 mx-auto">
            <div className="flex justify-between my-2">
              <span>{day}</span>
              <span>{`${travelStart} ~ ${travelEnd}`}</span>
            </div>
            <div className="my-3">
              {/* <FeedImage /> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MyPageMain;

// function FeedImage({ feedImages }) {
//   const handleShowImages = () =>
//     feedImages.map(({ imgId, imgUrl }, index) => (index > 8 ? null : (
//       <img
//         key={imgId}
//         src={imgUrl}
//         className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg"
//         alt="여행사진"
//       />
//     )));
//   if (feedImages.length < 8) {
//     return feedImages.map(({ imgUrl, imgId }) => (
//       <img
//         key={imgId}
//         src={imgUrl}
//         className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg"
//         alt="여행사진"
//       />
//     ));
//   }

//   return handleShowImages();
// }
