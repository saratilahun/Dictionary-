import React, {useState} from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './autocomplete.css';



export default function AutoComplete() {
  const items = [
    {
      id: 0,
      word: 'Jaaaaaaaaaa',
      description: 'programming language'
    },
    {
      id: 1,
      word: 'JavaScript',
      description: 'programming language'
    },
    {
      id: 2,
      word: 'javause',
      description: 'programming language'
    },
    {
      id: 3,
      word: 'Jav',
      description: 'programming language'
    },
    {
      id: 4,
      word: 'siii',
      description: 'programming language'
    },
    {
        id: 2,
        word: 'sur',
        description: 'programming language'
      },
      {
        id: 3,
        word: 'son',
        description: 'programming language'
      },
      {
        id: 4,
        word: 'save',
        description: 'programming language'
      },
    
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
    

  }

  return (
    <div className="App">
        
      <header className="App-header">
        <div style={{ width: 600  }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ keys: ["word", "description"] }}
            resultStringKeyName="word"
            styling={{ maxHeight: 200, overflow: 'auto'}}
            placeholder="search here..."
            maxResults='20'
          />
        </div>
      </header>
    </div>
  )
}

