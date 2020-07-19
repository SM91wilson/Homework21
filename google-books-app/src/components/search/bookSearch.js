import React from 'react';

function Search({search, onSearchChange, onSubmit}){
    return(
        <form>
            <label></label>
            <input></input>
            <button
                onClick={onSubmit}
            >Search</button>
        </form>
    )
}