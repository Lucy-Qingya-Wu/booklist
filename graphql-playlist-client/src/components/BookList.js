import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';


const GET_BOOKS_QUERY = gql`
    {
        books{
            name
            id
        }
    }
`

class BookList extends Component {
    displayBooks = () => {
        const {loading} = this.props.data;
        if (loading){
            return <div>Loading books...</div>
        }else{
            return this.props.data.books.map(book=><li key={book.id}>{book.name}</li>)
        }
    }

    render() {

            console.log("GET_BOOKS_QUERY", GET_BOOKS_QUERY);
            return (
                <div>
                    <ul id="book-list">
                      {this.displayBooks()}
                    </ul>
                    
                </div>
            );
    }
}

export default graphql(GET_BOOKS_QUERY)(BookList);
