import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTriplan } from '../../state/redux/plan/plan';
import AddNewTriplanForm from '../presentation/AddNewTriplanForm';

function AddNewTriplan() {
  const titleRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  // const dispatch = useDispatch();

  const findUser = (e) => {
    console.log(e.target.value);
    // 유저 검색 다 적고나서 한 번 검색 : debounce
  };

  const handleCreateTriplan = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const location = locationRef.current.value;
    const start = startRef.current.value;
    const end = endRef.current.value;

    if (title === '' || location === '' || start === '' || end === '') {
      alert('입력해주세요');
      return;
    }

    // 새로운 트리플랜 생성
    const planInfo = {
      title,
      travel_destination: location,
      travel_start: start,
      travel_end: end,
      memberList: [],
    };

    console.log(planInfo);
    // dispatch(createTriplan(planInfo));
  };

  return (
    <AddNewTriplanForm
      titleRef={titleRef}
      locationRef={locationRef}
      startRef={startRef}
      endRef={endRef}
      findUser={findUser}
      createTriplan={handleCreateTriplan}
    />
  );
}

export default AddNewTriplan;
