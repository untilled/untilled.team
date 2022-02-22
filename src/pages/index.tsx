import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { pageNameState } from 'states'

const Home: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState)

  return (
    <div>
      <span>pageName 상태: {pageName}</span>
    </div>
  )
}

export default Home
