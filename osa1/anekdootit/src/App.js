import { useState } from 'react'

const RandomAnecdote = ({anecdote, votes}) =>{
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdote}
      </p>
      <p>
        has {votes} votes
      </p>
    </div>
  )
}
const MostVotedAnecdote = ({anecdotes, votes}) =>{
  const mostVotes = Math.max(...votes)
  const mostVotesId = votes.indexOf(mostVotes)
  
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[mostVotesId]}
      </p>
      <p>
        has {mostVotes} votes
      </p>
    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const addVotes = () =>{
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const nextAnecdote = () =>{
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber);
  }
  
  return (
    <div>
      <RandomAnecdote anecdote={anecdotes[selected]} votes = {votes[selected]}/>
      <Button onClick={addVotes} text='vote'/>
      <Button onClick={nextAnecdote} text='next anecdote' />
      <MostVotedAnecdote anecdotes={anecdotes} votes = {votes}/>
    </div>
  )
}

export default App