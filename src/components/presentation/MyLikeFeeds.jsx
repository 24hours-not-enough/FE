export default function MyLikeFeeds({ myLikes }) {
  return (
    <div className="grid grid-cols-2 px-5 pt-5">
      {myLikes.map(({ feeds, city }) => (
        <div key={city}>
          <div
            className="bg-white w-44 h-44 mx-auto"
          >
            {feeds.map(({ images }) => images.map((item) => (
              <div key={item} className="inline-block bg-black w-20 h-20 mx-1" />
            )))}
          </div>
          모든게시물
        </div>
      )) }
      <div>
        <div
          className="bg-white w-44 h-44 mx-auto"
        />
        제주도
      </div>
    </div>
  );
}
