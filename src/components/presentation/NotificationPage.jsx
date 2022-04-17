import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { getTokenFromSession } from '../../shared/utils';
import { _notification, _userInfo } from '../../state/redux/user/userSelector';

const baseURL = process.env.REACT_APP_SERVER_IP;

function NotificationPage() {
  const userInfo = useSelector(_userInfo);
  const notification = useSelector(_notification);

  const [noti, setNoti] = useState([]);
  const [isConnectStomp, setIsConnectStomp] = useState(false);
  const [header, setHeader] = useState({
    authorization: getTokenFromSession('accessToken'),
    refreshToken: getTokenFromSession('refreshToken'),
  });
  const stompClient = useRef(null);

  useEffect(() => {
    setHeader({
      authorization: getTokenFromSession('accessToken'),
      refreshToken: getTokenFromSession('refreshToken'),
    });
  }, []);

  useEffect(() => {
    (async () => {
      const socket = new SockJS(`${baseURL}/alarmpoint`);
      stompClient.current = Stomp.over(socket);
      await stompClient.current.connect(
        header,
        () => {
          setIsConnectStomp(true);

          stompClient.current.subscribe(`/queue/${userInfo.userId}`, (data) => {
            const newMessage = JSON.parse(data.body);
            setNoti((prev) => [...prev, newMessage]);
          }, header);
        },
        (err) => {
          console.log(err);
        },
      );
    })();

    return () => {
      stompClient.current.disconnect();
    };
  }, [userInfo, baseURL]);

  console.log(noti);

  // const scrollToBottom = () => {
  //   chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [chat.length]);

  return (
    <div>notification</div>
  );
}

export default NotificationPage;
