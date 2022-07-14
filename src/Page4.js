import React from 'react'
import DelayRedirect from './DelayRedirect'

const Page4 = () => {
  return (
    <div>Page4
      <DelayRedirect to="/page5" delay={1000}></DelayRedirect>
    </div>
  )
}

export default Page4