import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTriplan } from '../../state/redux/plan/plan';
import _ from 'lodash';
import AddNewTriplanForm from '../presentation/AddNewTriplanForm';
import PlanApi from '../../state/data/planApi';

function AddNewTriplan() {
  const titleRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  // const dispatch = useDispatch();

  const planApi = new PlanApi();

  const findedUser = (e) => {
    console.log(e.target.value);
    // api 통신
    // 유저가 있으면 아래에 표시
    // 없으면 빈칸 표시
    planApi.findByUsername({ nickName: e.target.value })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  const findUser = _.debounce(findedUser, 350);

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
