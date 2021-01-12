import React, { useState, useEffect } from "react";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const URL = "https://course-api.com/react-tours-project";

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(URL);
    const tours = await response.json();
    setLoading(false);
    console.log(tours);
    setTours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading === true) {
    return <Loading />;
  }
  return <h1>Hello my friend React</h1>;
}

export default App;
