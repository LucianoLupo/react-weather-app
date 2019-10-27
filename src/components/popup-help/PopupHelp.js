import React, { useRef, useState, useEffect } from 'react'
import { useTransition } from 'react-spring'
import {  Main, Container, Message, Button, Content, Life } from './popup-help.styles'

let id = 0

function MessageHub({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) {
  const [refMap] = useState(() => new WeakMap())
  const [cancelMap] = useState(() => new WeakMap())
  const [items, setItems] = useState([])
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0, life: '100%' },
    enter: item => async next => await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ life: '0%' })
      await next({ opacity: 0 })
      await next({ height: 0 })
    },
    onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
    config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
  })

  useEffect(() => void children(msg => setItems(state => [...state, { key: id++, msg }])), [])
  return (
    <Container>
      {transitions.map(({ key, item, props: { life, ...style } }) => (
        <Message key={key} style={style}>
          <Content ref={ref => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <p>{item.msg}</p>
            <Button
              onClick={e => {
                e.stopPropagation()
                cancelMap.has(item) && cancelMap.get(item)()
              }}>
            </Button>
          </Content>
        </Message>
      ))}
    </Container>
  )
}

const myData = "Go to the 'shield' icon 🛡️ on the search bar and accept to request not secure content, don't do it on other webs 😉 😎 !!"

const PopupHelp = () => {
  const ref = useRef(null)
  return (
    <Main onClick={() => ref.current(myData)}>
      <p>Click here if the app doesn't work!</p>
      <MessageHub children={add => (ref.current = add)} />
    </Main>
  )
}

export default PopupHelp;
