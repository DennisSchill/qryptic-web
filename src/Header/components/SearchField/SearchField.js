import React, { useEffect, useState } from 'react'
import './SearchField.css'
import { Redirect } from 'react-router-dom'

const SearchField = () => {
  const [redirect, setRedirect] = useState(false)
  const [input, setInput] = useState('')
  
  useEffect(() => {
    if (redirect) {
      setRedirect(false)
      setInput('')
    }
  }, [redirect])

  const onChange = (e) => {
    setInput(e.target.value)
  }

  const ifEnter = (e) => {
    if (e.code !== 'Enter') return
    handleSubmit()
    e.preventDefault()
  }
  const handleSubmit = () => {
    setRedirect(true)
  }
  return (
    <div className="SearchField">
      {redirect && <Redirect to={`/search/products/${input}`} />}
      <input
        placeholder="Search.."
        id="productSearchField"
        value={input}
        onChange={onChange}
        onKeyPress={ifEnter}
      ></input>
    </div>
  )  
}

export default SearchField