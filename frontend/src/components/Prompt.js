import React, {useState} from 'react'

import './Prompt.css'

function Prompt() {

  const [story, setStory] = useState([])

  const getStory = () => {
    return fetch("/story").then(
                res => res.json()
            ).then(
            (resJson) => {
                setStory(resJson)
            }
        )
    }

  return (
    <div className='prompt-page'>
        <div className='prompt-header'>Pythonic Stories 🐍 </div>
        <div className='prompt-content'>{story.join(' ')}</div>
        <div className='prompt-next-button' onClick={getStory}>read new story</div>
    </div>
  )
}

export default Prompt