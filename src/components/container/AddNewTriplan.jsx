import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { createTriplan } from '../../state/redux/plan/plan';
import AddNewTriplanForm from '../presentation/AddNewTriplanForm';
import PlanApi from '../../state/data/planApi';

function AddNewTriplan() {
  const titleRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const inviteRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchedUser, setSearchedUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);

  const planApi = new PlanApi();

  const findedUser = (e) => {
    planApi.findByUsername(e.target.value)
      .then((res) => {
        console.log(res);
        setSearchedUser({
          profileImg: res.data.data.file_store_course,
          username: res.data.data.nickname,
        });
      })
      .catch((err) => console.log(err.response));
  };

  const findUser = _.debounce(findedUser, 500);

  const selectUserForInvite = () => {
    const updated = [...selectedUser, searchedUser];
    setSelectedUser(updated);

    setSearchedUser(null);
    inviteRef.current.value = '';
  };

  const handleCreateTriplan = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const location = locationRef.current.value;
    const start = startRef.current.props.selected;
    const end = endRef.current.props.selected;

    if (title === '' || location === '' || start === '' || end === '') {
      alert('입력해주세요');
      return;
    }

    // 새로운 트리플랜 생성
    const planInfo = {
      title,
      travel_destination: location,
      travel_start: new Date(start).toISOString(),
      travel_end: new Date(end).toISOString(),
      memberList: selectedUser,
    };

    console.log(planInfo);
    dispatch(createTriplan({ planInfo, navigate }));
  };

  return (
    <AddNewTriplanForm
      titleRef={titleRef}
      locationRef={locationRef}
      startRef={startRef}
      endRef={endRef}
      inviteRef={inviteRef}
      findUser={findUser}
      findedUser={searchedUser}
      createTriplan={handleCreateTriplan}
      selectUserForInvite={selectUserForInvite}
    />
  );
}

export default AddNewTriplan;
