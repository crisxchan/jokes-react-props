import './joke.css'

export default function Joke(props) {
    return (
        <div id="joke">
            {props.setup && <h1 id="setup">{props.setup}</h1>}
            <h1 id="punchline">{props.punchline}</h1>
        </div>
    )
}