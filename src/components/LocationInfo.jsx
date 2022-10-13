import React from 'react'
import './styles/locationInfo.css'



const LocationInfo = ({location}) => {

    console.log(location);
  return (
<article className='container_planet'>
    <h2 className='name_person'>{location?.name}</h2>
    <ul className='list_person'>
        <li className='details'><span className='span_details'>Type:</span>{location?.type}</li>
        <li className='details'><span className='span_details'>Dimension:</span>{location?.dimension}</li>
        <li className='details'><span className='span_details'>Population:</span>{location?.residents.length}</li>
    </ul>
</article>  
)
}

export default LocationInfo