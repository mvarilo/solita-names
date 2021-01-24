import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'

import Names from './components/Names'
import Filter from './components/Filter'

const App = () => {
  const [names, setNames] = useState([])
  const [namesTotal, setNamesTotal] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/names')
      .then(response => {
        setNames(response.data)
        totalNames(response.data)
      })
  }, [])

  const namesToShow = showAll
    ? names
    : names.filter(name => {
      let toFilter = name.name.toLocaleLowerCase();
      let toSearch = searchName.toLocaleLowerCase();
      return toFilter.includes(toSearch)
    }
    )

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

  const handleSearchName = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
    setShowAll(false)
  }

  return (
    <div>
      <h1>Names Application</h1>
      <div>
        <p>
          <Button onClick={sortNamesByPopular}>Sort by most popular</Button>
        </p>
        <p>
          <Button onClick={sortNamesByAlphabet}>Sort in alphabetical order</Button>
        </p>
        <p>
          <Filter
            handleSearchName={handleSearchName}
          />
        </p>
      </div>
      <p>Total number of names: {namesTotal}</p>
      <Names names={namesToShow} />
    </div>
  )
}

export default App 