/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { getTokenFromSession } from '../../shared/utils';
import { _userInfo } from '../../state/redux/user/userSelector';

const baseURL = process.env.REACT_APP_SERVER_IP;

function PlanDetailChat({ planDetails }) {
  const userInfo = useSelector(_userInfo);
  const formRef = useRef();
  const inputRef = useRef();
  const chatSectionRef = useRef();

  const { userId } = userInfo;
  const { planId } = planDetails;

  const [chat, setChat] = useState([]);
  const [isConnectStomp, setIsConnectStomp] = useState(false);
  const [header, setHeader] = useState({
    authorization: getTokenFromSession('accessToken'),
    refreshToken: getTokenFromSession('refreshToken'),
  });
  const [members, setMembers] = useState(planDetails.members);
  const stompClient = useRef(null);

  useEffect(() => {
    setHeader({
      authorization: getTokenFromSession('accessToken'),
      refreshToken: getTokenFromSession('refreshToken'),
    });
    setMembers(planDetails.members);
  }, []);

  useEffect(() => {
    (async () => {
      const socket = new SockJS(`${baseURL}/endpoint`);
      stompClient.current = Stomp.over(socket);
      await stompClient.current.connect(
        header,
        () => {
          setIsConnectStomp(true);

          stompClient.current.subscribe(`/topic/${planId}`, (data) => {
            const newMessage = JSON.parse(data.body);
            setChat((prev) => [...prev, newMessage]);
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
  }, [planId, baseURL]);

  const sendChat = (e) => {
    e.preventDefault();

    const messageContent = inputRef.current.value;
    if (messageContent === '') {
      return;
    }

    if (isConnectStomp) {
      // 채팅
      const chatData = { message: messageContent, user_id: userId, plan_id: planId };
      stompClient.current.send('/app/chat', {}, JSON.stringify(chatData));

      formRef.current.reset();
    }
  };

  const scrollToBottom = () => {
    chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.length]);

  return (
    <article>
      <section ref={chatSectionRef} className="overflow-y-auto h-[600px] scrollbar-hide flex flex-col">
        {
            chat.map((msg, idx) => {
              const { message, user_id } = msg;
              const sender = members.filter((member) => member.userId === user_id)[0];
              if (userId === user_id) {
                return (
                  <div key={idx} className="flex mb-[18px] self-end">
                    <img
                      className="w-[30px] h-[30px] rounded-full mr-[12px]"
                      src={sender.userProfileImage}
                      alt={sender.userName}
                    />
                    <div>
                      <div className="text-[10px] leading-[13px] mb-[5px]">{sender.userName}</div>
                      <p
                        className="text-[14px] leading-[19px] font-[550] px-[9px] py-[6px] bg-[#E7E6FE] rounded-[12px]"
                      >
                        {message}
                      </p>
                    </div>
                  </div>
                );
              }
              return (
                <div key={idx} className="flex mb-[18px]">
                  <img
                    className="w-[30px] h-[30px] rounded-full mr-[12px]"
                    src={sender.userProfileImage}
                    alt={sender.userName}
                  />
                  <div>
                    <div className="text-[10px] leading-[13px] mb-[5px]">{sender.userName}</div>
                    <p
                      className="text-[14px] leading-[19px] font-[550] px-[9px] py-[6px] bg-[#E7E6FE] rounded-[12px]"
                    >
                      {message}
                    </p>
                  </div>
                </div>
              );
            })
          }
      </section>
      <section className="sticky bottom-0 left-0 w-full border-solid border-t-[1px] border-[#E8E9F5] flex justify-center bg-main-background">
        <form
          ref={formRef}
          className="flex items-center my-[14px] border-solid border-[1px] border-[#E8E9F5] w-[350px] h-[42px] rounded-[16px] pl-[18px] py-[10px] pr-[5px]"
          onSubmit={sendChat}
        >
          <input ref={inputRef} type="text" className="bg-main-background pl-[] flex-auto mr-[5px]" />
          <button type="submit" className="w-[32px] h-[32px] bg-black rounded-[12px]">
            <img src="/images/sendIcon.png" alt="보내기" className="w-[12px] h-[14px] mx-auto" />
          </button>
        </form>
      </section>
    </article>
  );
}

export default PlanDetailChat;
