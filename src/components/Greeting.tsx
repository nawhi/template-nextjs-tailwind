import React from 'react'

type GreetingProps = {
  name: string
}

const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>
}

export default Greeting
