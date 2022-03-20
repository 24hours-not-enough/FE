import { memo } from 'react';

function TriPlanImages() {
  return (
    <div className="flex flex-col justify-center my-5 mx-3 bg-white rounded-lg">
      <div className="w-88 mx-auto">
        <div className="flex justify-between my-2">
          <span>기념여행</span>
          <span>jan 02 ~ feb 02, 2022</span>
        </div>
        <div className="my-3">
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
          <img className="inline-block m-1 w-20 h-20 bg-slate-400 rounded-lg" alt="여행사진" />
        </div>
      </div>
    </div>
  );
}

export default memo(TriPlanImages);
