const anan = {
  id: 1,
  nickname: '아난',
}

const steve = {
  id: 2,
  nickname: '스티브',
}

const alisa = {
  id: 3,
  nickname: '아리사',
}

export const chats = [
  {
    id: 1,
    title: '김밥을 만드는 방법',
    users: [anan, steve, alisa],
    messages: [
      {
        id: 1,
        content: '안녕하세요 아난님!',
        user: anan,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: '안녕하세요! ㅎㅎ 오늘은 무엇을 기록하실 건가요?',
        user: steve,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: '하나몬님 멋있으세요',
    users: [anan, steve, alisa],
    messages: [
      {
        id: 1,
        content: '안녕하세요 아난님!',
        user: anan,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: '안녕하세요! ㅎㅎ 오늘은 무엇을 기록하실 건가요?',
        user: steve,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: '개발자가 개인 블로그 하나쯤은 있어야지 ㅋㅋ',
    users: [anan, steve, alisa],
    messages: [
      {
        id: 1,
        content: '안녕하세요 아난님!',
        user: anan,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: '안녕하세요! ㅎㅎ 오늘은 무엇을 기록하실 건가요?',
        user: steve,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: '테스트 코드 작성의 중요성',
    users: [anan, steve, alisa],
    messages: [
      {
        id: 1,
        content: '안녕하세요 아난님!',
        user: anan,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: '안녕하세요! ㅎㅎ 오늘은 무엇을 기록하실 건가요?',
        user: steve,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: '2023 요즘 국내 개발자 정보 공유 사이트 커리어리 추천',
    users: [anan, steve, alisa],
    messages: [
      {
        id: 1,
        content: '안녕하세요 아난님!',
        user: anan,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: '개발자로 1년… 2022년 연말 회고 그리고 2023년 다짐',
        user: steve,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
