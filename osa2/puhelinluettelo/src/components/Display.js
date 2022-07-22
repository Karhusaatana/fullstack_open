import Persons from "./Persons"
const Display = (props) =>{
    return(
      <div>
        {props.array.map((person) =>{
          return (
            <Persons key={person.name} name={person.name} number={person.number}/>
          )
        })}
      </div>
    )
}
export default Display