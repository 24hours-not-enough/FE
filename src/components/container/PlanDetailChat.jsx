import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import moment from 'moment';
import { _userInfo } from '../../state/redux/user/userSelector';

function PlanDetailChat({ planDetails }) {
  const userInfo = useSelector(_userInfo);
  const formRef = useRef();
  const inputRef = useRef();

  const { userId } = userInfo;
  const { planId } = planDetails;

  const [chat, setChat] = useState([]);
  const [isConnectStomp, setIsConnectStomp] = useState(false);
  const stompClient = useRef(null);

  useEffect(() => {
    const socket = new SockJS('/alarmpoint');
    stompClient.current = Stomp.over(socket);
    stompClient.current.debug = null;
    stompClient.current.connect(
      {},
      () => {
        setIsConnectStomp(true);
        stompClient.current.subscribe(`/topic/${planId}`, (data) => {
          const newMessage = JSON.parse(data.body);
          console.log(newMessage);

          const chatData = {
            time: moment(new Date()).format('HH:mm A'),
            name: newMessage.sender,
            content: newMessage.contents,
          };
          setChat((prev) => [...prev, chatData]);
        });
      },
      (err) => {
        console.error(err);
      },
    );
    return () => {
      stompClient.current.disconnect();
    };
  }, [planId]);

  console.log(userId, isConnectStomp, chat);

  return (
    <div className="overflow-hidden">
      <article className="">
        <section className="w-screen overflow-y-auto scrollbar-hide">
          {/* {
            chat.map((msg) => <div>채팅</div>)
          } */}
        </section>
        <section className="absolute bottom-0">
          <form ref={formRef} className="flex">
            <input ref={inputRef} type="text" />
            <button type="submit">보내기</button>
          </form>
        </section>
      </article>
    </div>
  );
}

export default PlanDetailChat;
