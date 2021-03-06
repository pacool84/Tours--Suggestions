import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./tours.css";
import "./app.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const URL = "https://course-api.com/react-tours-project";

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(URL);
      const tours = await response.json();
      setLoading(false);
      console.log(tours);
      setTours(tours);
    } catch (error) {
      <h1>Something wrong {error}</h1>;
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <header className='header-notours'>
        <div>
          <h2 className='header-title__notours'>No more tours</h2>
          <button
            onClick={() => fetchTours()}
            className='header-button__refresh'
          >
            Refresh
          </button>
        </div>
      </header>
    );
  }

  return (
    <header>
      <Tours tours={tours} removeTour={removeTour} />;
    </header>
  );
}

export default App;
