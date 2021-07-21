# madcamp_project3
몰입캠프 홍보 겸 간단한 공지와 금주의 픽 작품을 올릴 수 있는 홈페이지를 만들었습니다. 기존 몰입캠프 홈페이지(https://www.madcamp.io/)의 정보들을 기반으로 작성하였습니다.

# Main Page
navbar를 이용하여 첫 메인 페이지를 구성하였고 스크롤 하여 내리면, 새로운 navbar가 생성됩니다. 스크롤을 통해 생긴 navbar의 각 항목을 클릭하면 각 항목이 시작하는 곳으로 스크롤이 이동하게 됩니다. 우측 하단에는 한 번에 상단으로 올라갈 수 있는 버튼을 만들었습니다. WHY?에서 '몰입캠프 후기보기', 역사에서 'See more..'을 클릭하면 새로운 페이지로 넘어가서 추가적인 정보를 보여줍니다.
또한 모든 페이지 하단에는 footer가 보입니다. footer에는 몰입캠프 유튜브 채널, 페이스북, 후원사 홈페이지 등으로 연결되는 링크가 있으며, 담당자님과 연락할 수 있는 이메일 정보가 있습니다.
<img width="1680" alt="KakaoTalk_20210721_012052694" src="https://user-images.githubusercontent.com/63151413/126423891-c5d54150-5b7a-40ec-8739-5f19ae86da67.png">
<img width="1680" alt="KakaoTalk_20210721_012115407" src="https://user-images.githubusercontent.com/63151413/126423904-e1375280-bda8-43cb-be2c-a41118dd81d3.png">
<img width="1680" alt="KakaoTalk_20210721_012134692" src="https://user-images.githubusercontent.com/63151413/126423909-43e914b2-7b6e-4741-84cf-a544930c7af3.png">

# Notice
일반적인 홈페이지들의 게시판과 동일한 기능을 할 수 있도록 만들었습니다. 단, 관리자만 글 작성이 가능합니다. 글 작성에는 ckeditor, 저장에는 Nodejs와 MySql을 이용하였고 파일을 올리는 부분만 firebase를 이용하였습니다.
<img width="1680" alt="KakaoTalk_20210721_012207954" src="https://user-images.githubusercontent.com/63151413/126423918-3681792c-7997-428e-8f6d-372897bc50e2.png">
<img width="1680" alt="KakaoTalk_20210721_012218686" src="https://user-images.githubusercontent.com/63151413/126423928-2bf7be77-787a-4eab-806b-1dd6e3c8db02.png">

# Pick!
그동안 나왔던 금주의 픽들을 소개하는 게시판입니다. 관리자만 글 작성이 가능하고, 열람권한은 로그인한 사람에게만 있습니다. Add 버튼을 누르면 파일첨부를 위한 팝업창이 열립니다. 파일을 올리는 부분은 firebase를 이용하였고, firebase의 url과 title을 MySql에 저장하여 Card형태로 출력하였습니다.
<img width="1680" alt="KakaoTalk_20210721_012230697" src="https://user-images.githubusercontent.com/63151413/126423941-880dd878-0578-4390-9535-5e9bee14afa2.png">
<img width="1680" alt="KakaoTalk_20210721_012241253" src="https://user-images.githubusercontent.com/63151413/126423947-613ba1ac-beb3-446d-a3b9-80417b97ea52.png">

# FAQ
자주 나오는 질문들이 모아져 있는 페이지입니다. 기존 페이지의 내용을 참고하였습니다. 폴딩박스를 이용하여 질문을 클릭하면 답변이 보이고, 한 번 더 클릭하면 보이지 않습니다.
<img width="1680" alt="KakaoTalk_20210721_012259559" src="https://user-images.githubusercontent.com/63151413/126423957-22c6be49-0725-48cb-8b25-bb7df72e82ac.png">

# Application
몰입캠프 지원과 관련있는 페이지입니다. 몰입캠프에 대한 세부적인 사항과 지원서 작성 시 알면 좋은 가이드가 들어있습니다.
<img width="1680" alt="KakaoTalk_20210721_012310148" src="https://user-images.githubusercontent.com/63151413/126423959-1eb5e494-e632-444e-9906-08269faceecd.png">

# Login, Sign Up
로그인/회원가입과 관련있는 페이지로, 몰입캠프 참가생들이 대학생인만큼 학교 이메일을 이용해서만 회원가입할 수 있도록 하였습니다. node js의 nodemailer module을 이용하여 가입 시 1회 인증을 받도록 하였습니다. 비밀번호는 hashing 후 db에 저장하기 때문에 잃어버렸을 시 이메일 인증을 겨처 비밀번호를 변경할 수 있습니다.
<img width="1680" alt="KakaoTalk_20210721_012336357" src="https://user-images.githubusercontent.com/63151413/126423972-9e760a10-d9e7-4fc6-97db-ecc1cb817472.png">
<img width="1680" alt="KakaoTalk_20210721_012358785" src="https://user-images.githubusercontent.com/63151413/126423977-56b25826-c943-41bc-8e51-7f5504711275.png">
<img width="1680" alt="KakaoTalk_20210721_012421563" src="https://user-images.githubusercontent.com/63151413/126423979-75adc9c2-7ce4-4d79-aa86-aa732c3c692c.png">

# 반응형 웹페이지
화면 크기에 따라 보이는 모습이 달라지도록 만들었습니다. 화면이 작아질 때는 다음과 같이 보여지게 됩니다.
<img width="502" alt="KakaoTalk_20210721_012438849" src="https://user-images.githubusercontent.com/63151413/126423986-4cde8291-f3f2-49fc-bfe0-6a6047137b00.png">
<img width="518" alt="KakaoTalk_20210721_012455579" src="https://user-images.githubusercontent.com/63151413/126424000-296bbeb8-37ef-4f46-a199-91cabb3d5e94.png">
