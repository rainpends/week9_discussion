import { useState } from "react";

export default function Counter() {

  const [n, setN] = useState(0)
  // const [m, setM] = useState('')

  const [firstName, setFirstName] = useState('')
  const fullName = firstName

  function increment() {
    setN((prev) => prev + 1)
    console.log(n)
  }

  function handlefirstName(e) {
    setFirstName(e.target.value)
  }

  return (
    <>
      <h1>Counter: {n}</h1>
      <p>Welcome, {fullName}</p>
      <input value={firstName} onChange={handlefirstName} placeholder="Enter your name"></input>
      <hr></hr>
      <button onClick={() => { increment(); increment(); increment() }}>Add</button>
    </>
  )
}