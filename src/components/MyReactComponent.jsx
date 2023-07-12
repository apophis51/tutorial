import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

const App = () => {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/programming-blogs/")
      .then(({ data }) => setRestaurants(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="App">
      <ul>
        {restaurants.map(({attributes }) => (
          <ReactMarkdown>{attributes.Content}</ReactMarkdown>
        ))}
      </ul>
    </div>
  );
};

export default App;