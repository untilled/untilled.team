import { AnimatedPage } from 'components/AnimatedPage'
import Members from 'containers/members'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <AnimatedPage>
      <Members />
    </AnimatedPage>
  )
}

export default Page
