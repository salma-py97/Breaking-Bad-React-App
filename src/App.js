import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Loading from './components/ui/Loading'
import SearchCharacters from './components/ui/SearchCharacters'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const itemsFromServer = await getItems()
      setItems(itemsFromServer)
      setIsLoading(false)
    }
    fetchItems();
  }, [query])

  const getItems = async () => {
    const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    const data = await res.data;
    return data
  }


  return (
    <div className="container">
      <Header />
      <SearchCharacters getQuery={(q) => setQuery(q)} />
      {isLoading && <Loading />}
      <CharacterGrid characters={items} />
    </div>
  );
}

export default App;
