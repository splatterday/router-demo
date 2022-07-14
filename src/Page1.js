import React from 'react'
import DelayRedirect from './DelayRedirect'

const Page1 = () => {
  return (
    <div>Page1
      <DelayRedirect to="/page2" delay={1000}></DelayRedirect>
    </div>
  )
}

export default Page1