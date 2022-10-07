import React, {useEffect} from 'react'

function App() {

  useEffect (() => {
    fetch('/story').then(
      res => res.text() 
    ).then(
      (story) => {
        console.log(story)
      }
    )
  })
  

  return (
    <div>App</div>
  )
}

export default App