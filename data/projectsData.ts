interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData = [
  {
    title: 'Five Minute',
    description: '5분 만에 읽을 수 있는 책과 시와 모든 것',
    href: 'https://five-min-deploy-next.vercel.app/',
  },
  {
    title: 'Chak Chak',
    description: '팝업스토어 예약 SaaS',
    imgSrc: '/static/images/proj/chakchak.png',
    href: 'https://chakchak.vercel.app/',
  },
  {
    title: 'Surrounds',
    description: '위치 기반 음성 채팅 SNS',
    imgSrc: '/static/images/proj/surrounds.png',
    href: 'https://surrounds-fe.vercel.app',
  },
  {
    title: 'Study Cafe',
    description: '온라인 스터디 카페 플랫폼',
    imgSrc: '/static/images/proj/study-cafe.png',
    href: 'https://study-cafe.vercel.app',
  },
  {
    title: 'With You',
    description: '육아일기 앱',
    imgSrc: '/static/images/proj/with-you.png',
    href: 'https://with-you-front-end.vercel.app',
  },
] satisfies Project[]

export default projectsData
