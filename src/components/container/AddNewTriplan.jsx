import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createTriplan } from '../../state/redux/plan/plan';
import AddNewTriplanForm from '../presentation/AddNewTriplanForm';

function AddNewTriplan(props) {
  const titleRef = useRef();
  const locationRef = useRef();
  const dispatch = useDispatch();

  const findUser = (e) => {
    console.log(e.target.value);
    // 유저 검색
  };

  const handleCreateTriplan = () => {
    const title = titleRef.current.value;
    const location = locationRef.current.value;

    if (title === '' || location === '') {
      alert('입력해주세요');
      return;
    }

    // 새로운 트리플랜 생성
    const planInfo = {
      title,
      travel_destination: location,
      travel_start: '2022-03-12',
      travel_end: '2022-03-13',
      memberList: [],
    };

    dispatch(createTriplan(planInfo));
  };

  return (
    <AddNewTriplanForm
      titleRef={titleRef}
      locationRef={locationRef}
      findUser={findUser}
      createTriplan={handleCreateTriplan}
    />
  );
}

export default AddNewTriplan;
