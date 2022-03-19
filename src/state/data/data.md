# 전체 스토어 구조
## 사용해야할 객체 단위
- 각 장소별 데이터
- 맵 좌표 및 확대 레벨 - 고정값
## 장소 단위
~~~
data = {
    [placeData, placeData2, ....]
}
placeData = {
    id: // 고유값
    feedData: {[
        {
            image: [이미지url, ]
            comment: ['가나', ...]
            user: {
                userId: 유저 아이디
                userName: 작성자이름
                userImage: 작성자 프로필 이미지
            }
            content: 남긴 글
            date: 작성 날짜
            like: [좋아요한사람, ...]
        },
        {
        }
    ]}
    placeName: string
    coordinate: [위도, 경도]
}
~~~
## 유저 데이터
~~~
user = {
    userId: 유저아이디
    userName: 유저닉네임
    userProfileImage: 프사
    notification: {[{
        userName: //초대한 유저
        planId:   // 여행계획 id값?
        title: //여행계획 이름
    },
    ...
    ]}
    myFeed = {[
        {
            image: [이미지url, ]
            comment: ['가나', ...]
            user: {
                userId: 유저 아이디
                userName: 작성자이름
                userImage: 작성자 프로필 이미지
            }
            content: 남긴 글
            date: 작성 날짜
            like: [좋아요한사람, ...]
        },
        ...
    ]}
    myTriPlan = {[
        {
            id: 고유값
            placeData: {
                장소 데이터에서 id값만 담아오기
            },
        },
        {
            ...
        }
    ]},
}
~~~