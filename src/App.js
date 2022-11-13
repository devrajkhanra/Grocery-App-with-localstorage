import './App.css';
import Header from './Components/Headercomponent/Header';
import { useEffect, useState } from 'react'
import Content from './Components/Contentcomponent/Content';
import Footer from './Components/Footercomponent/Footer';
import Additem from './Components/Contentcomponent/Additemcomponent/Additem';
import Searchitem from './Components/Contentcomponent/Searchcomponent/Searchitem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('grocery list')) || [])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('grocery list', JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title='Groceries' />
      <Additem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Searchitem search={search} setSearch={setSearch} />
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
