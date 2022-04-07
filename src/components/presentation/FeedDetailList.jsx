import { memo } from 'react';
import styles from './feedDetail.module.css';

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
        <div className={`${styles.inputfile} absolute top-8 flex`}>
          {feedDetailLocImg.map(({ imgUrl, fileName }) => (
            <img key={fileName} src={imgUrl} alt="이미지" className="w-20 h-20 mr-2 rounded-xl" />
          ))}
          <label
            htmlFor="file"
            className="grid place-items-center bg-main-background w-20 h-20 rounded-xl text-2xl text-main"
          >
            +
          </label>
          <input type="file" id="file" onChange={handleChangeImageFile} multiple="multiple" />
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
