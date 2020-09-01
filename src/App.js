import React, { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Landing from "./components/landing/Landing";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);
  return <div className="App">{loading ? <Loader /> : <Landing />}</div>;
}

export default App;
