const PersonForm = (person) =>{
    return(
      <form onSubmit={person.onSubmit}>
        <div>
          name: <input
          value= {person.value}
          name={person.name}
          onChange={person.nameOnChange}
          />
        </div>
        <div>
          number: <input
          value={person.number}
          onChange={person.numberOnChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
          </div>
      </form>
    )
  }
export default PersonForm