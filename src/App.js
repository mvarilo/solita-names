import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Names from './components/Names'

const App = () => {
  const [names, setNames] = useState([])
  const [namesTotal, setNamesTotal] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/names')
      .then(response => {
        setNames(response.data)
        totalNames(response.data)
      })
  }, [])

  const sortNamesByPopular = () => {
    const sorted = [...names].sort((a, b) => {
      return b.amount - a.amount;
    });
    setNames(sorted)
  }

  const sortNamesByAlphabet = () => {
    const sorted = [...names].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    setNames(sorted)
  }

  const totalNames = (names) => {
    var total = 0;
    names.map((name) =>
      total = total + name.amount
    )
    setNamesTotal(total);
  }

  return (
    <div>
      <h1>Names Application</h1>
      <div>
        <p>
          <button onClick={sortNamesByPopular}>Sort by most popular</button>
        </p>
        <p>
          <button onClick={sortNamesByAlphabet}>Sort in alphabetical order</button>
        </p>
      </div>
      <p>Total number of names: {namesTotal}</p>
      <Names names={names} />
    </div>
  )
}

export default App 