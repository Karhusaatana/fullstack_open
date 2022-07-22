const Filter = (filter) =>{
    return(
      <div>
      {filter.text} {<input
        value={filter.value}
        onChange={filter.onChange}
        />
      }
      </div>
    )
  }

export default Filter