import { useState, useEffect } from 'react';
import CardList from './Components/CardList';
import './App.css';

export default function App() {

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(true)
  const buttonText = visible ? 'Hide monsters' : 'Show monsters';

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=15')
      .then(response => response.json())
      .then(json => setData(json.users));
  }, [])

  return (
    <div className='tc'>
      <h1 className='creepster'>Monster Book</h1>
      <h3 className='pa2'> All your monsters in one place! </h3>
      <button onClick={() => { setVisible(!visible); }}>
        {buttonText}
      </button>
      {visible ? <CardList usersArr={data} /> : null}
    </div>
  );

}
