export const menus = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Members',
    href: '/members',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

type members = {
  //name: string
  //desc: string
  //role: string
  id: number
  images: string[]
}[]

export const members: members = [
  {
    id: 1,
    images: ['/images/members/1.png', '/images/members/1-hover.png'],
  },
  {
    id: 2,
    images: ['/images/members/2.png', '/images/members/2-hover.png'],
  },
  {
    id: 0,
    images: ['/images/members/0.png', '/images/members/0-hover.png'],
  },
  {
    id: 3,
    images: ['/images/members/3.png', '/images/members/3-hover.png'],
  },
  {
    id: 4,
    images: ['/images/members/4.png', '/images/members/4-hover.png'],
  },
  {
    id: 5,
    images: ['/images/members/5.png', '/images/members/5-hover.png'],
  },
  {
    id: 6,
    images: ['/images/members/6.png', '/images/members/6-hover.png'],
  },
  {
    id: 7,
    images: ['/images/members/7.png', '/images/members/7.png'],
  },
  {
    id: 8,
    images: ['/images/members/8.png', '/images/members/8-hover.png'],
  },
  {
    id: 9,
    images: ['/images/members/9.png', '/images/members/9-hover.png'],
  },
  {
    id: 10,
    images: ['/images/members/10.png', '/images/members/10.png'],
  },
  {
    id: 11,
    images: ['/images/members/11.png', '/images/members/11-hover.png'],
  },
  {
    id: 12,
    images: ['/images/members/1.png', '/images/members/1-hover.png'],
  },
  {
    id: 13,
    images: ['/images/members/2.png', '/images/members/2-hover.png'],
  },
  {
    id: 14,
    images: ['/images/members/3.png', '/images/members/3-hover.png'],
  },
  {
    id: 15,
    images: ['/images/members/4.png', '/images/members/4-hover.png'],
  },
]

const questions = [
  {
    id: 0,
    question: 'What is your github nickname?',
    answer: '',
  },
  {
    id: 1,
    question: 'What is your email?',
    answer: '',
  },
]
