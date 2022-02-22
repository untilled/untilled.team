import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { pageNameState } from 'states'

const HomePage: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState)

  return (
    <div>
      <span>pageName 상태: {pageName}</span>
    </div>
  )
}

export default HomePage
