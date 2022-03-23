import { useCallback, useState } from 'react';
import {
  useNavigate, useLocation, Route, Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeUserName } from '../state/redux/user/userThunk';
import { _myFeed, _myLikes } from '../state/redux/feed/feedSelector';
import { _userInfo } from '../state/redux/user/userSelector';
import { title } from '../shared/utils';

import MyPagePlan from '../components/presentation/MyPagePlan';
import MyPageMain from '../components/presentation/MyPageMain';
import MyPageProfile from '../components/presentation/MyPageProfile';

import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import MyLikeFeeds from '../components/presentation/MyLikeFeeds';

function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userInfo = useSelector(_userInfo);
  const myLikes = useSelector(_myLikes);
  const myFeed = useSelector(_myFeed);

  const [userNameChange, setUserNameChange] = useState(userInfo.username);

  const handleRouter = useCallback((query) => () => {
    navigate(query);
  }, [navigate]);

  const onChangeUserName = useCallback((e) => {
    setUserNameChange(e.target.value);
  }, [userNameChange]);

  const handleChangeUserName = useCallback(() => {
    dispatch(changeUserName({ userNameChange }));
  }, [userNameChange]);

  return (
    <LayoutWrapper>
      <Navbar title={title(location.pathname).title} back={title(location.pathname).back}>
        <div>ㅎㅇㅎㅇ</div>
      </Navbar>
      <Routes>
        <Route
          path=""
          element={(
            <MyPageMain
              myFeed={myFeed}
              handleRouter={handleRouter}
              userInfo={userInfo}
            />
          )}
        />
        <Route
          path="/profile"
          element={(
            <MyPageProfile
              onChange={onChangeUserName}
              onClick={handleChangeUserName}
              userInfo={userInfo}
            />
          )}
        />
        <Route path="/plan" element={<MyPagePlan />} />
        <Route
          path="/mylike-feeds"
          element={<MyLikeFeeds myLikes={myLikes} />}
        />
      </Routes>
    </LayoutWrapper>
  );
}

export default MyPage;
