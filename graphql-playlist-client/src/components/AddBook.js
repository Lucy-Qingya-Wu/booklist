import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import AddBookForm from './AddBookForm';

const GET_AUTHORS_QUERY = gql`
    {
        authors{
            name
            id
        }
    }
`

class AddBook extends Component {


    render() {
            
            
            return (
                <React.Fragment>

                    {!this.props.data.loading && this.props.data.authors.map(author=><li key={author.id}>{author.name}</li>)}
                    <AddBookForm />
                </React.Fragment>
            );
    }
}

export default graphql(GET_AUTHORS_QUERY)(AddBook);
