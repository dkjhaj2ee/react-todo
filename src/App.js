import { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';

function App() {
  const [inputItem, setInputItem] = useState('')
  const [items, setItems] = useState([])

  const inputHandler = (event) => {
    event.preventDefault()
    setInputItem(event.target.value)
  }

  const addItems = (event) => {
    event.preventDefault();
    if(inputItem){
      setItems((oldItems) => {
        return [...oldItems, inputItem]
      })

      setInputItem('')
    }
  }

  const deleteHandler = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arr, index) =>{
        return id !== index;
      })
    })
  }

  return (
    <div className="App">
      <div className="box">
          <div className="box-title">To Do List</div>
          <div>
            <form onSubmit={addItems}>
              <input type="text" onChange={inputHandler} value={inputItem} placeholder="Add an Item"/>
              <button type="submit" className="btn-add">+</button>
            </form>
          </div>
          <div className="item-list">
            <ul>
              {
                items.map((itemValue, index) => {
                  return <ListItem key={index} id={index} text={itemValue} onSelect={deleteHandler}/>
                })
              }
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
