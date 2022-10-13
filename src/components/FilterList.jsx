import React from 'react'

const FilterList = ({suggestedList, setSearchInput}) => {

    console.log(suggestedList)

    const handleClick= id =>setSearchInput(id)

  return (
    <ul className='list_ul'>
{
suggestedList?.map(location=>(
    <li className='details' onClick={() => handleClick(location.id)} key={location.id}>
    {location.name}</li>
))
}
    </ul>
  )
}

export default FilterList