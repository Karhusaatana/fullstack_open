import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Display from './components/Display'


const App = () => {
  const [persons, setPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filterName, setFilter] = useState('')
  const filteredPersons = [...persons]

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        setPersons(response.data)
      })
  }, [])
  const addName = (event) =>{
    event.preventDefault()
    for(var i = 0; i < persons.length; i++){
      if(persons[i].name === newName){
        return alert(`${newName} is already added to phonebook`);
      }
    }
    const personList = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personList))
  }
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNumber(event.target.value)
  }
  const handleFilterChange = (event) =>{
    setFilter(event.target.value)
  }
  const filtered = !filterName
    ? filteredPersons
    : filteredPersons.filter((person) =>
      person.name.toUpperCase().includes(filterName.toUpperCase()))
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        text="filter shown with"
        value={filterName}
        onChange={handleFilterChange}
      />

      <h3>add a new</h3>

      <PersonForm
        onSubmit={addName}
        value={newName}
        name={newName}
        number={newNumber}
        nameOnChange={handleNameChange}
        numberOnChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Display
        array={filtered}
      />
    </div>
  )
}

export default App