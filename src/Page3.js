import React from 'react'
import DelayRedirect from './DelayRedirect'

const Page3 = () => {
  return (
    <div>Page3
      <DelayRedirect to="/page4" delay={1000}></DelayRedirect>
    </div>
  )
}

export default Page3