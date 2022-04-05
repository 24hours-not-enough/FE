import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import SockJS from 'sockjs-client';
// import StompJs from '@stomp/stompjs';
import { _userInfo } from '../../state/redux/user/userSelector';

function Chat({ planId }) {
  const loginUser = useSelector(_userInfo);
  const msgRef = useRef();
  const formRef = useRef();
  // const [messages, setMessages] = useState([]);

  // const socket = new SockJS('/endpoint');
  // const stompClient = Stomp.over(socket);

  // useEffect(() => {
  //   stompClient.connect({}, (frame) => {
  //     console.log(`Connected: ${frame}`);
  //     stompClient.subscribe(`/topic/${planId}`, (e) => {
  //       const updated = [...messages, JSON.parse(e.body).message];
  //       setMessages(updated);
  //       console.log(JSON.parse(e.body).message);
  //     });
  //   });
  //   return () => {
  //     stompClient.disconnect();
  //   };
  // }, []);

  const sendChat = (e) => {
    e.preventDefault();
    // if (msgRef.current.value === '') {
    //   return;
    // }
    // const data = { message: msgRef.current.value, userInfo: loginUser, plan_id: planId };
    // stompClient.send(`/app/chat/${planId}`, {}, JSON.stringify(data));
    // formRef.current.reset();
  };

  return (
    <div>
      <div
        className="w-full absolute left-0 bottom-0 border-solid border-[1px] border-[#E8E9F5]"
      >
        <form
          ref={formRef}
          onSubmit={sendChat}
          className="mx-[20px] mt-[14px] mb-[24px] border-solid border-[1px] border-[#E8E9F5] bg-[#F7F6FF] flex rounded-[16px]"
        >
          <input
            ref={msgRef}
            type="text"
            className="text-[14px] flex-1 bg-[#F7F6FF] mx-[18px] my-[12px]"
          />
          <button
            type="submit"
            className="w-[32px] h-[32px] p-[10px] bg-black text-center rounded-[12px] m-[5px] self-center"
          >
            <img src="/images/sendIcon.png" alt="보내기" className="inline-block" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
