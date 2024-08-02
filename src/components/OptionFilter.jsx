import React from 'react'

export const OptionFilter = ({option, name, filter, setFilter}) => {
  return (
    <>
      <button onClick={() => setFilter(option)}>{filter.toLowerCase() == option.toLowerCase() ? (<p className='text-BrightBlue'>{name}</p>) : (<p>{name}</p>) }</button>
    </>
  )
}
