import Intro from 'components/Home/0.Intro'
import About from 'components/Home/1.About'
import Archivement from 'components/Home/2.Archievement'
import Projects from 'components/Home/3.Projects'
import Members from 'components/Home/4.Members'
import Contact from 'components/Home/5.Contact'
import Footer from 'components/_shared/Footer'

export const pages = [
  {
    name: '',
    component: Intro,
  },
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Archivement',
    component: Archivement,
  },
  {
    name: 'Projects',
    component: Projects,
  },
  {
    name: 'Members',
    component: Members,
  },
  {
    name: 'Contact',
    component: Contact,
  },
  {
    name: '',
    component: Footer,
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
