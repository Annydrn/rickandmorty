import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorData from './components/Error'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  //para guardar una location
  const [location, setlocation] = useState()
  //para guardar la informacion del input y hacer la peticion cuando se hace submit
  const [searchInput, setSearchInput] = useState('')
//para guardar las sugerencias de la API
const [suggestedList, setsuggestedList] = useState()
// esta funcion es para indicar si hay error o no
const [hasError, sethasError] = useState(false)


  useEffect(() => {
    let id=getRandomNumber()
    if(searchInput){
      id=searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {sethasError(false)
      setlocation(res.data)})
      .catch(err=> sethasError(true))
    }, [searchInput])

const handleSubmit=event=>{
  event.preventDefault()
  return setSearchInput(event.target.idLocation.value)

}

const handleChange= event => {

  if(event.target.value===''){
    setsuggestedList()
  }

  const URL=`https://rickandmortyapi.com/api/location?name=${event.target.value}`

  axios.get(URL)
  .then(res=>setsuggestedList(res.data.results))
  .catch(err=> console.log(err))

}

  return (
    <div className="App">
      <section className='section_initial'> 
      <h1 className='title_initial'>Rick And Morty</h1>
      </section>
      <div className='search_name'>
      <h1 className='title_principal' >Busca A Tu Personaje Favorito</h1>
      <form onSubmit={handleSubmit} >
        <input className='input'
        id='idLocation'
         placeholder='Enter name o planet'
          type="text" 
          onChange={handleChange}/>
        <button className='button_search'>Search</button>
        <FilterList
        suggestedList={suggestedList}
        setSearchInput={setSearchInput}
        />
      </form>
     </div>
      { hasError ?
      <ErrorData/>
      :
      <>
      <LocationInfo
        location={location} />
      <div className='card-container'>
        {
          location?.residents.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        }
      </div>
      </>
  }   
    </div>
 
  )
}


export default App
