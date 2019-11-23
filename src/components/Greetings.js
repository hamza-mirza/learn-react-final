import React from "react"

const Greetings = (props) => {
  const { title, message } = props
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  )
}

export default Greetings