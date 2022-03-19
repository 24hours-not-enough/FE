userData: {
	userId: 유저 아이디
	userName: 유저 닉네임
	userProfileImage: 유저 프로필 이미지
}

notification: [
		{
			code: 알림 종류
			feedId or planId: 댓글, 좋아요 or 채팅
			userData: [
				{
					userName: 초대한 유저, 댓글 단 유저, 좋아요한 유저
					userProfileImage: 유저 프로필 이미지
				}
			]
		}
	]
=> 알림 종류를 특정 값으로 받아서 그 이후에 필요한 값들을 골라서 사용? 아니면 키값 자체를 통일


planData: [{
	planId(plan_id): //고유값
	title: 
	travelDestination(travel_destination):
	travelStart(travel_start):
	travelEnd(travel_end):
	isDeleted(del_tc):
	members: [userData, ...]
	calendars: [
		{
			calendarId:
			title(days): '1일차'
			calendarDetails: [
				{
					calendarDatilId:
					locationName:
					locationMemo:
					coordinates: [latitude, longitude]
					order: 순서
				}
			]
		}
	]
	checkList: [
		{
			checkListId: 
			checkItem:
			isChecked:
		}
	]
}]


feedData: [{
	feedId(feedDetailLocId):
	title: 장소이름
	date: 작성 시간
	images: [url, ...]
	like: [userData, ...]
	creator: {
		userId: 유저 아이디
		userName: 작성자 닉네임
		userProfileImage: 작성자 프로필 이미지
	}
	content: 피드 메모
	comments: [
		{
			commentId: 
			creator: {
				userId: 유저 아이디
				userName: 댓글 작성자 닉네임
				userProfileImage: 댓글 작성자 프로필 이미지
			}
			content: 댓글 내용
		}
	]
}]


placeData: {
	coordinates: [latitude, longitude]
	placeName: 장소이름
	placeAddress: 지역 주소(도 단위로 잘라서..?)
	feedData: []
}

---

## 유저 데이터
(유저정보), (알림), /내 트리플랜/, /내 피드/, /좋아요 피드/, (북마크 장소), (다크모드)
```
user = {
	userId: 유저 아이디
	userName: 유저 닉네임
	userProfileImage: 유저 프로필 이미지
	notification: [
		{
			code: 알림 종류
			feedId or planId: 댓글, 좋아요 or 채팅
			userData: [
				{
					userName: 초대한 유저, 댓글 단 유저, 좋아요한 유저
					userProfileImage: 유저 프로필 이미지
				}
			]
		}
	]
	isDark: 다크모드 여부(default: false)
	myBookmark: [
		{
			coordinates: [latitude, longitude]
			placeName: 장소이름
			placeAddress: 지역 주소
			feedData: [
				{
					feedId(feedDetailLocId):
					title: 장소이름
					date: 작성 시간
					images: [url, ...]
					like: [userData, ...]
					creator: {
						userId: 유저 아이디
						userName: 작성자 닉네임
						userProfileImage: 작성자 프로필 이미지
					}
					content: 피드 메모
					comments: [
						{
							commentId: 
							creator: {
								userId: 유저 아이디
								userName: 댓글 작성자 닉네임
								userProfileImage: 댓글 작성자 프로필 이미지
							}
							content: 댓글 내용
						}
					]
				}
			]
		}
	]
}
```

## 계획 데이터
(내 트리플랜)
```
plan = [{
	planId(plan_id): //고유값
	title: 
	travelDestination(travel_destination):
	travelStart(travel_start):
	travelEnd(travel_end):
	isDeleted(del_tc):
	members: [userData, ...]
	calendars: [
		{
			calendarId:
			title(days): '1일차'
			calendarDetails: [
				{
					calendarDatilId:
					locationName:
					locationMemo:
					coordinates: [latitude, longitude]
					order: 순서
				}
			]
		}
	]
	checkList: [
		{
			checkListId: 
			checkItem:
			isChecked:
		}
	]
}]
```

## 피드 데이터
(내 피드), (좋아요 피드)
```
feed = {
	myFeed: [
		{
			feedId: 계획에 해당한는 피드목록에 대한 아이디
			title: 
			travelStart: 
			travelEnd:
			feedDetail: [
				{
					title(day): '1일차' 
					feedDetailLoc: [
						{
							feedDetailLocId: 피드 아이디
							coordinates: [latitude, longitude]
							placeName: 
							feedDetailLocImg: [{imgUrl: }]
						}
					]
				}
			]
		}
	],
	myLikes: [
		{
			city: 
			feeds: [{
				feedId(feedDetailLocId):
				title: 장소이름
				date: 작성 시간
				images: [url, ...]
				like: [userData, ...]
				creator: {
					userId: 유저 아이디
					userName: 작성자 닉네임
					userProfileImage: 작성자 프로필 이미지
				}
				content: 피드 메모
				comments: [
					{
						commentId: 
						creator: {
							userId: 유저 아이디
							userName: 댓글 작성자 닉네임
							userProfileImage: 댓글 작성자 프로필 이미지
						}
						content: 댓글 내용
					}
				]
			}]
		}
	]
}
```

## 메인페이지 데이터
```
place: [
	{
		coordinates: [latitude, longitude]
		placeName: 장소이름
		placeAddress: 지역 주소
		feeds: [{
			feedId(feedDetailLocId):
			title: 장소이름
			date: 작성 시간
			images: [url, ...]
			like: [userData, ...]
			creator: {
				userId: 유저 아이디
				userName: 작성자 닉네임
				userProfileImage: 작성자 프로필 이미지
			}
			content: 피드 메모
			comments: [
				{
					commentId: 
					creator: {
						userId: 유저 아이디
						userName: 댓글 작성자 닉네임
						userProfileImage: 댓글 작성자 프로필 이미지
					}
					content: 댓글 내용
				}
			]
		}]
	}
]
```