import React from 'react'
import DelayRedirect from './DelayRedirect'

const Page5 = () => {
  return (
    <div>Page5
      <DelayRedirect to="/page6" delay={1000}></DelayRedirect>
    </div>
  )
}

export default Page5