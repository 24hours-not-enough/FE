/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
import {
  useCallback, useState, useRef, useEffect,
} from 'react';
import {
  useNavigate, useLocation, Route, Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import iconSet from '../shared/imageUrl';
import { setFeedId } from '../state/redux/feed/feed';
import { changeUserName } from '../state/redux/user/userThunk';
import { addFeedDetail } from '../state/redux/feed/feedThunk';
import { imgApi } from '../state/data/axios';
import { _myFeed, _myLikes, _myFeedId } from '../state/redux/feed/feedSelector';
import { _userInfo } from '../state/redux/user/userSelector';
import { headerTitle } from '../shared/utils';

import MyPagePlan from '../components/presentation/MyPagePlan';
import MyPageMain from '../components/presentation/MyPageMain';
import MyPageProfile from '../components/presentation/MyPageProfile';
import MyLikeFeeds from '../components/presentation/MyLikeFeeds';

import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';

function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const userInfo = useSelector(_userInfo);
  const myLikes = useSelector(_myLikes);
  const myFeed = useSelector(_myFeed);
  const myFeedId = useSelector(_myFeedId);

  const [userNameChange, setUserNameChange] = useState(userInfo.username);
  const [feedTitle, setFeedTitle] = useState('');
  const [feedNum, setFeedNum] = useState(0);
  const [feedDetailNum, setFeedDetailNum] = useState(0);
  const [feedImages, setFeedImages] = useState([]);
  const [feedInfo, setFeedInfo] = useState([
    {
      day: '1일차',
      feedDetailLoc: [
        {
          memo: '',
          feedLocation: {
            latitude: 0,
            longitude: 0,
            placeAdress: '',
          },
          feedDetailLocImg: [],
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

  const handleChangeFeedTitle = useCallback((e) => {
    const newFeedInfo = JSON.parse(JSON.stringify(feedInfo));
    newFeedInfo[feedNum] = {
      ...newFeedInfo[feedNum],
      day: e.target.value,
    };
    setFeedInfo(newFeedInfo);
  }, [feedNum, feedDetailNum, feedInfo]);

  const handleChangePlace = useCallback((e) => {
    const newFeedInfo = JSON.parse(JSON.stringify(feedInfo));
    newFeedInfo[feedNum].feedDetailLoc[feedDetailNum].feedLocation = {
      ...newFeedInfo[feedNum].feedDetailLoc[feedDetailNum].feedLocation,
      placeAdress: e.target.value,
    };
    setFeedInfo(newFeedInfo);
  }, [feedNum, feedDetailNum, feedInfo]);

  const handleChangeComment = useCallback((e) => {
    const newFeedInfo = JSON.parse(JSON.stringify(feedInfo));
    newFeedInfo[feedNum].feedDetailLoc[feedDetailNum] = {
      ...newFeedInfo[feedNum].feedDetailLoc[feedDetailNum],
      memo: e.target.value,
    };
    setFeedInfo(newFeedInfo);
  }, [feedNum, feedDetailNum, feedInfo]);

  const handleChangeImageFile = useCallback((e) => {
    const formData = new FormData();
    Object.values(e.target.files).map((item) => formData.append('imgFiles', item));
    imgApi.post('/api/feed/image', formData).then((res) => {
      setFeedImages(Object.values(res.data.data));
    });
  }, [feedNum, feedDetailNum, feedInfo]);

  const handleAddFeedDetailLoc = useCallback(({ index }) => () => {
    const newFeedInfo = JSON.parse(JSON.stringify(feedInfo));
    newFeedInfo[index].feedDetailLoc.push({
      feedLocation: {
        latitude: 0,
        longitude: 0,
        memo: '',
        placeAdress: '',
      },
      feedDetailLocImg: [],
    });
    setFeedInfo(newFeedInfo);
  }, [feedInfo]);

  const handleAddFeedDetail = useCallback(() => {
    setFeedInfo([...feedInfo, {
      day: '',
      feedDetailLoc: [
        {
          memo: '',
          feedLocation: {
            latitude: 0,
            longitude: 0,
            placeAdress: '',
            name: '11',
          },
          feedDetailLocImg: [],
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

  const handleFocusFeedDetailNumber = useCallback(({ key }) => () => {
    setFeedDetailNum(key);
  }, [feedDetailNum]);

  const handleFocusFeedNumber = useCallback(({ key }) => () => {
    setFeedNum(key);
  }, [feedNum]);

  const handleStoreFeed = useCallback(() => {
    const travelStart = new Date(startDateRef.current.state.preSelection).toISOString();
    const travelEnd = new Date(endDateRef.current.state.preSelection).toISOString();

    dispatch(addFeedDetail({
      feedInfo,
      feedTitle,
      travelStart,
      travelEnd,
    }));
  }, [dispatch, feedInfo, feedTitle, startDateRef, endDateRef]);

  useEffect(() => {
    const newFeedInfo = JSON.parse(JSON.stringify(feedInfo));
    newFeedInfo[feedNum].feedDetailLoc[feedDetailNum] = {
      ...newFeedInfo[feedNum].feedDetailLoc[feedDetailNum],
      feedDetailLocImg:
      [...newFeedInfo[feedNum].feedDetailLoc[feedDetailNum].feedDetailLocImg, ...feedImages],
    };
    setFeedInfo(newFeedInfo);
  }, [feedImages]);

  return (
    <LayoutWrapper>
      <Navbar
        title={headerTitle(location.pathname).title}
        back={headerTitle(location.pathname).back}
      >
        {location.pathname === '/mypage/plan'
          ? (<button onClick={handleStoreFeed} type="button">완료</button>)
          : (
            <button className="pt-1" type="button" onClick={() => {}}>
              <img className="w-6 h-5" src={iconSet.myPage.settingIcon} alt="setting" />
            </button>
          )}
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
              startDateRef={startDateRef}
              endDateRef={endDateRef}
              feedDetailNum={feedDetailNum}
              handleGetFeedId={handleGetFeedId}
              handleFocusFeedNumber={handleFocusFeedNumber}
              handleFocusFeedDetailNumber={handleFocusFeedDetailNumber}
              handleChangeFeedTitle={handleChangeFeedTitle}
              handleChangePlace={handleChangePlace}
              handleChangeComment={handleChangeComment}
              handleChangeImageFile={handleChangeImageFile}
              handleChangeTitle={handleChangeTitle}
              handleAddFeedDetail={handleAddFeedDetail}
              handleAddFeedDetailLoc={handleAddFeedDetailLoc}
              myFeed={myFeed}
            />
          )}
        />
        <Route
          path="/mylike-feeds"
          element={(
            <MyLikeFeeds
              handleRouter={handleRouter}
              myLikes={myLikes}
            />
)}
        />
      </Routes>
    </LayoutWrapper>
  );
}

export default MyPage;
