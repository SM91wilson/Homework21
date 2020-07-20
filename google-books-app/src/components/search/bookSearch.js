import React from 'react';

function Search({search, onSearchChange, onSubmit}){
    return(
        <div>
        <form>
            <label>
                Book
            </label>
            <input
            className='form-control'
            type='text'
            value={search}
            name='search'
            onChange={onSearchChange}
            ></input>
            <button
                onClick={onSubmit}
                type='submit'
            >
                Search
            </button>
        </form>
    </div>
    )
}

export default Search;