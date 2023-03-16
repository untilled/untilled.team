import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import useCursorify from './useCursorify'

type Props = {}

const DefaultCursor: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {},
  ref
) => {
  const {} = useCursorify()
  return <div ref={ref}>DefaultCursor</div>
}

export default forwardRef(DefaultCursor)
