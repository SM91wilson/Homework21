import React from 'react';
import BooksContainer from '../../components/booksContainer/bookscontainer';

class Saved extends React.Component{
    state={
        books: []
    }

    render(){
        return(
            <BooksContainer />
        )
    }
}

export default Saved;