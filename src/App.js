import { React, useState, useEffect } from 'react'
import Tours from './Tours'
import Loading from './Loading';
import Button from 'react-bootstrap/Button'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  console.log(tours)

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <div className='container text-center py-5'>
        <h1>No more tours</h1>
        <Button onClick={fetchTours} variant="primary">Refresh</Button>{' '}
      </div>
    )
  }
  return (
    <div>
      <h1 className='text-center pt-5'>Tour List</h1>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
