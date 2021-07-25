import { React } from 'react';
import { useEffect, useState } from 'react'
import { Redirect, BrowserRouter } from 'react-router-dom'
import './SearchForm.css';


const SearchForm = () => {
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
        setRedirect(true)
        e.preventDefault()
    }

    const handleSubmit = () => {
        setRedirect(true)
    }

    return(
        <div className="SearchForm">
            <BrowserRouter>

            {redirect && <Redirect to={`/search/cryptocurrencies/${input}`} />}
                <input
                    type="text" 
                    placeholder="Search"
                    id="productSearchField"
                    value={input}
                    onChange={onChange}
                    onKeyPress={ifEnter}
                    className="form-control mr-sm-2"
                ></input>


            </BrowserRouter>
        </div>
    )
}
  
export default SearchForm