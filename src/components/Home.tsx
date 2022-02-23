import React from 'react'
import { useRecoilState } from 'recoil'
import { pageNameState } from 'states'

type Props = {}

const Home = (props: Props) => {
  const [pageName, setPageName] = useRecoilState(pageNameState)
  return (
    <div>
      <span>pageName 상태: {pageName}</span>
    </div>
  )
}

export default Home
