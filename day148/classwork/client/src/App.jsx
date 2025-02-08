import React, { useEffect, useState } from 'react'
const api="http://localhost:5001"

export default function App() {
  const [user,setUser] = useState(null)

  useEffect(() => {
    fetch(`${api}/user`)
    .then(res => res.json())
    .then(data => setUser(data))
    .then(err => console.log(err))
}, [])
console.log(user)
  return (
    <div>
      <h1>name</h1>
      <h2>{user.name}</h2>
      <h2>{user.surname}</h2>
      <h2>{user.age}</h2>
    </div>
  )
}
