import Joke from './component/Joke'
import jokesData from './jokesData'
import './App.css'

export default function App() {
  const jokeElements = jokesData.map((joke, i) => 
    <Joke 
      key={i++} 
      setup={joke.setup} 
      punchline={joke.punchline} 
    />
  )

  console.log(jokeElements)

  return (
    <>
      {jokeElements}
    </>
  )
}

