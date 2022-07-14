import React from 'react'
import DelayRedirect from './DelayRedirect'

const Page2 = () => {
  return (
    <div>Page2
      <DelayRedirect to="/page3" delay={1000}></DelayRedirect>
    </div>
  )
}

export default Page2