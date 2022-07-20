const Header =({course}) => <h2>{course}</h2>

const Total = parts =>{
  const total = parts.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0,
  )
  return(
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map(part =>
        <Part key = {part.id} part={part}/>
      )}
    </div>
  )
}
const Course = ({course}) =>{
  return(
     <div>
      <Header course ={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default Course