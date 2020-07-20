import React from 'react';
import BooksContainer from '../../components/booksContainer/bookscontainer';
import Search from '../../components/search/bookSearch';

class SearchPage extends React.Component{
    state = {
        books: [],
        search: ''
    };

    onSearchChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    onSubmit = e => {
        e.preventDefault();

    }
    
    render(){
        return(
            <div>
                <Search
                onSearchChange={this.onSearchChange}
                onSubmit={this.onSubmit}
                search={this.state.search}
                />
                <BooksContainer />
            </div>
        )
    }
}

export default SearchPage;