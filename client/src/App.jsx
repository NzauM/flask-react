import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './Books'

function App() {
  const [count, setCount] = useState(0)
  // const[salamu, setSalamu] = useState('')

  // useEffect(()=>{
  //   fetch('/').then(r=>r.json()).then(data=>setSalamu(data.hello))
  // },[])


  return (
    <>
      
      <h1>Lib App</h1>
      {/* <h1>{salamu}</h1> */}
      <Books/>
      
    </>
  )
}

export default App
