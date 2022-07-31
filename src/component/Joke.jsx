import { useState } from 'react'
import './joke.css'

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false) 

    function toggleIsShown() {
        setIsShown(prevIsShown => !prevIsShown)
    }

    return (
        <div id="joke">
            {props.setup && <h1 id="setup">{props.setup}</h1>}
            {isShown && <h1 id="punchline">{props.punchline}</h1>}
            <button onClick={toggleIsShown}>Tell me the Punchline!</button>
        </div>
    )
}