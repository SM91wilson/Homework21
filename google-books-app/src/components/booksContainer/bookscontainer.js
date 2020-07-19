import React from 'react';

function BooksContainer({title, children}){
    return(
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {children}
            </p>
        </div>
    )
}

export default BooksContainer;