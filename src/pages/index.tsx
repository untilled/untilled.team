import Home from 'components/Home'
import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { pageNameState } from 'states'

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage
