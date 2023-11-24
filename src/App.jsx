import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";


function App() {

  const catAPI = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
  });

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      let response = await catAPI.get("?limit=10&mime_types=jpg");
      setCats(response.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Cats</h1>
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {cats.map((cat) => (
          <li key={cat.url} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img src={cat.url} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {cat.id}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{cat.id}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">{cat.size}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
