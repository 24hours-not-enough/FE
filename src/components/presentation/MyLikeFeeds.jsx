export default function MyLikeFeeds({ myLikes, handleRouter }) {
  return (
    <div className="grid grid-cols-2 px-5 pt-5">
      {myLikes.map(({ feeds, city }) => (
        <div key={city}>
          <div
            className="bg-white w-[168px] h-[168px] mx-auto p-[6px]"
          >
            {feeds.map(({ images }) => images.map((item) => (
              <img key={item} alt="좋아요한 이미지" src={item} className="inline-block bg-main w-[76px] h-[76px] mx-[1px] my-[1px] rounded-md" />
            )))}
          </div>
          {city}
        </div>
      )) }
    </div>
  );
}
