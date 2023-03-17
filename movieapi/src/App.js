import logo from './logo.svg';
 import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])


  const handleClickInput = (e) => {
    setSearch(e.target.value)

  }
  useEffect(() => {
    if (!search.trim()) return;
    axios.get(`http://www.omdbapi.com?apikey=c6c2b4a8&s=${search}`,
    ).then((res) => {
      setData(res.data.Search)

    })

  }, [search])

 
  return (
    < >
      <div className='movieapi'>
        <input type='text' placeholder='search movie name' value={search} onInput={handleClickInput} />
        <div className='product'>
          {data?.map(el =>
            <div key={el.id} className='procuct-data'>
              <img src={el.Poster} />
              <div className='movie'>
              <p>{el.Title}</p>
              <p className='category'>{el.Year}</p>
              </div>
              
            </div>
          )}
        </div>


      </div>
    </>
  );
}

export default App;
