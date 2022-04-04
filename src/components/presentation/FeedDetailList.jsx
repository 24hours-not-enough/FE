import { memo } from 'react';

function FeedDetailList({
  index,
  feedDetailLocImg,
  onChangePlace,
  onChangeComment,
  onClick,
  handleChangeImageFile,
}) {
  return (
    <div
      onClick={onClick({ key: index })}
      key={`feedDetailList-${index}`}
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
        <input
          key={index}
          onChange={onChangePlace}
          placeholder="장소 추가하기"
          className="text-main"
        />
        <div className="absolute top-8 flex">
          {feedDetailLocImg.map((item) => (
            <img key={item} src={item} alt="이미지" className="w-20 h-20 mr-2 rounded-xl" />
          ))}
          <input type="file" id="file" onChange={handleChangeImageFile} multiple="multiple" className="bg-main-background w-20 h-20 rounded-xl" />
        </div>
        <input
          onChange={onChangeComment}
          className="absolute top-32 left-0"
          placeholder="자유롭게 기록해보세요"
        />
        <div
          style={{
            width: '10px', height: '10px', top: '168px', left: '-21px',
          }}
          className="absolute bg-main rounded-full"
        />
      </ul>
    </div>
  );
}
export default memo(FeedDetailList);