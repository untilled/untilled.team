import { AnimatedPage } from 'components/AnimatedPage'
import Home from 'containers/home'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <AnimatedPage>
      <Home />
    </AnimatedPage>
  )
}

export default Page
