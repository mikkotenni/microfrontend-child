import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading } from '@sympaoy/sympatico-component-library'
import './assets/styles.css'
import { listen, send, remove } from './api/lyrics'

const lyrics = {
  quote: 'All you touch and all you see, Is all your life will ever be.',
}

function action(e) {
  console.log(
    `Solonen & Kosola - Kolmetoista kertaa kovempi kuin kukaan: ${e.detail.quote}`
  )
  e.stopPropagation()
}

const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px solid gold;
`

function App() {
  useEffect(() => {
    /**
     * Communication between parent and child app using so called synthetic event (as
     * opposed to the events fired by the browser itself).
     * https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
     */
    listen('solonenKosolaLyrics', action)
    send('pinkFloydLyrics', lyrics)

    return () => {
      remove('solonenKosolaLyrics', action)
    }
  })

  return (
    <Container>
      <Heading
        color="neutral"
        content="Test 27"
        tag="h2"
        qaId="test-27-heading"
      />
      <div className="css-from-test28">Element with .css-from-test28 class</div>
      <div className="css-from-test27">Element with .css-from-test27 class</div>
    </Container>
  )
}

export default App
