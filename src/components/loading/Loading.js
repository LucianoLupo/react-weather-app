import React from 'react'
import { useSpring } from 'react-spring'

import { Container, Block } from './loading.styles'
const items = [1,2,3,4]
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.1)}px, 0)`

const Loading = () => {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 1500 },
    reset: true,
  })
  return (
      <Container>
          {
            items.map(i => <Block key={i} style={{ transform: radians.interpolate(interp(i)) }} />)

          }
      </Container>

  )
}


export default Loading;
