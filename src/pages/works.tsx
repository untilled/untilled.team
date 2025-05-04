import { AnimatedPage } from 'components/AnimatedPage'
import Works from 'containers/projects'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <AnimatedPage>
      <Works />
    </AnimatedPage>
  )
}

export default Page
