import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import items from "./data"
import Kontakt from './pages/Kontakt';
import Pocetna from './pages/Pocetna';

function App() {
  const [data, setData] = useState(items);
  const [loading, setLoading] = useState(true)


  const paginate = (tires) => {
    const itemsPerPage = 4  
    const numberOfPages = Math.ceil(tires.length / itemsPerPage)

    const newTires = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return tires.slice(start, start + itemsPerPage)
    })

    return newTires
  }
  function fetchTires() {
    setData(paginate(data));
    setLoading(false);
    console.log(data);
  }
  useEffect(() => {
    fetchTires();
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Pocetna data={data} loading={loading} />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
