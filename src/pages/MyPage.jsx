/* eslint-disable array-callback-return */
import { useCallback, useEffect, useState } from 'react';
import {
  useNavigate, useLocation, Route, Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setFeedId } from '../state/redux/feed/feed';
import { changeUserName } from '../state/redux/user/userThunk';
import { _myFeed, _myLikes, _myFeedId } from '../state/redux/feed/feedSelector';
import { _userInfo } from '../state/redux/user/userSelector';
import { headerTitle } from '../shared/utils';

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
  const myFeedId = useSelector(_myFeedId);

  const [userNameChange, setUserNameChange] = useState(userInfo.username);
  const [feedTitle, setFeedTitle] = useState('');
  const [feedNum, setFeedNum] = useState();
  const [feedInfo, setFeedInfo] = useState([
    {
      title: '1일차',
      feedDetailLoc: [
        {
          feedDetailLocId: 1,
          latitude: 0,
          longitude: 0,
          locationMemo: '',
          placeName: '',
          feedDetailLocImg: [{ imgUrl: '', imgId: '12312' }],
        },
      ],
    },
  ]);

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

  const handleAddFeedDetailLoc = useCallback(({ index }) => () => {
    const newFeedInfo = feedInfo;
    newFeedInfo[index].feedDetailLoc = newFeedInfo[index].feedDetailLoc.concat([{
      feedDetailLocId: 111,
      latitude: 123123,
      longitude: 0,
      locationMemo: '',
      placeName: '',
      feedDetailLocImg: [{ imgUrl: '', imgId: '' }],
    }]);
    setFeedInfo(newFeedInfo);
  }, [feedInfo]);

  const handleAddFeedDetail = useCallback(() => {
    setFeedInfo([...feedInfo, {
      title: 'aa',
      feedDetailLoc: [
        {
          feedDetailLocId: 1,
          latitude: 0,
          longitude: 0,
          locationMemo: '',
          placeName: '',
          feedDetailLocImg: [{ imgUrl: '', imgId: '12312' }],
        },
      ],
    }]);
  }, [feedInfo]);

  const handleGetFeedId = useCallback(({ feedId }) => () => {
    dispatch(setFeedId(feedId));
    const feedDetailTitleTemp = [];
    const feed = myFeed.filter((v) => v.feedId === feedId);
    feed[0].feedDetail.map((item) => {
      feedDetailTitleTemp.push(item);
    });
    setFeedInfo(feedDetailTitleTemp);
  }, [feedInfo]);

  const handleFocusFeedNumber = ({ key }) => () => {
    setFeedNum(key);
  };

  return (
    <LayoutWrapper>
      <Navbar
        title={headerTitle(location.pathname).title}
        back={headerTitle(location.pathname).back}
      >
        <button onClick={() => {}} type="button">완료</button>
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
              myFeedId={myFeedId}
              feedInfo={feedInfo}
              handleGetFeedId={handleGetFeedId}
              handleFocusFeedNumber={handleFocusFeedNumber}
              handleChangeTitle={handleChangeTitle}
              handleAddFeedDetail={handleAddFeedDetail}
              handleAddFeedDetailLoc={handleAddFeedDetailLoc}
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
