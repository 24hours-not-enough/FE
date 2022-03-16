/* eslint-disable camelcase */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import { createTriplan, getCertaintriplan, updateTriplan } from '../../state/redux/plan/plan';
import AddNewTriplanForm from '../presentation/AddNewTriplanForm';
import { _myplanDetail } from '../../state/redux/plan/planSelectors';
import PlanApi from '../../state/data/planApi';

function AddNewTriplan() {
  const param = useParams();
  const titleRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const inviteRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchedUser, setSearchedUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);
  const myplanDetail = useSelector(_myplanDetail);

  param.plan_id && useEffect(() => {
    param.plan_id && dispatch(getCertaintriplan(param.plan_id));
  }, []);

  useEffect(() => {
    const {
      plan_id, title, travel_destination, travel_start, travel_end, del_fl, memberList,
    } = myplanDetail;

    titleRef.current.value = title;
    locationRef.current.value = travel_destination;
    startRef.current.setSelected(new Date());
    endRef.current.setSelected(new Date());
    memberList.map((user) => ({ username: 'user', profileImg: user.profileImg }));
    setSelectedUser(memberList);
  }, [myplanDetail]);

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

  const findUser = _.debounce(findedUser, 600);

  const selectUserForInvite = () => {
    let isSameUser = false;
    selectedUser.forEach((user) => {
      if (user.username === searchedUser.username) {
        isSameUser = true;
      }
    });
    if (!isSameUser) {
      const updated = [...selectedUser, searchedUser];
      setSelectedUser(updated);
    }

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
      memberList: selectedUser.map((user) => ({ nickName: user.username })),
    };

    console.log(planInfo);
    param.plan_id
      ? dispatch(updateTriplan({ planInfo, navigate }))
      : dispatch(createTriplan({ planInfo, navigate }));
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
      selectedUser={selectedUser}
    />
  );
}

export default AddNewTriplan;
