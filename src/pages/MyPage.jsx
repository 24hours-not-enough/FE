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
  const [feedTitle, setFeedTitle] = useState('');
  const [feedInfo, setFeedInfo] = useState({ images: [], comment: '' });

  const handleRouter = useCallback((query) => () => {
    navigate(query);
  }, [navigate]);

  const onChangeUserName = useCallback((e) => {
    setUserNameChange(e.target.value);
  }, [userNameChange]);

  const handleChangeUserName = useCallback(() => {
    dispatch(changeUserName({ userNameChange }));
  }, [userNameChange]);

  const handleChangeTitle = useCallback((e) => {
    setFeedTitle(e.target.value);
  }, [feedTitle]);

  const handleAddFeedInfo = useCallback((key, value) => {

  }, []);

  const onClickAddFeed = useCallback(() => {

  }, []);
  return (
    <LayoutWrapper>
      <Navbar title={title(location.pathname).title} back={title(location.pathname).back}>
        <button onClick={onClickAddFeed} type="button">완료</button>
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
        <Route
          path="/plan"
          element={(
            <MyPagePlan
              handleChangeTitle={handleChangeTitle}
              myFeed={myFeed}
            />
          )}
        />
        <Route
          path="/mylike-feeds"
          element={<MyLikeFeeds myLikes={myLikes} />}
        />
      </Routes>
    </LayoutWrapper>
  );
}

export default MyPage;
