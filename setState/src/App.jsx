import React, { Component, useState } from 'react'
import Greet from './components/func.components'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hello from './components/hello'
import Welcome from './components/Welcome'
import Message from './components/mesaage'
import Counter from './components/counter'
import CustomButton  from './components/customButton'

class App extends Component {
  // const [count, setCount] = useState(0)

  render() {
    return (
      <div className="App">
      <CustomButton text="Like" /> 
      <CustomButton text="Bookmark" /> 
      <Greet class ="Syda"/> <br />
      <Welcome class = "Lamine" />
      <Hello name="AnsuFati" />
      <Message />
      <Counter /> 
      
      <div> <h1>the day </h1></div>
      </div>
    )
  } 
}

export default App;