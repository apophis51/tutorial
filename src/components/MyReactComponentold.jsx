import useSWR from 'swr';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

axios.get("http://localhost:1337/api/programming-blogs/").then((response) => {
  console.log(response);
});



const HomePage = () => {
  const { data, error } = useSWR('http://localhost:1337/api/programming-blogs/', fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;
  
  let cool = data.data
  console.log(cool)

  return (
    <div>
      {cool.map((item) => (
        <div >
          <ReactMarkdown>{item.attributes.Content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default HomePage;