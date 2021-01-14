import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const URL = "https://course-api.com/react-tours-project";

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(URL);
      const tours = await response.json();
      setLoading(false);
      console.log(tours);
      setTours(tours);
    } catch (error) {
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
  return (
    <header>
      <Tours tours={tours} />;
    </header>
  );
}

export default App;
