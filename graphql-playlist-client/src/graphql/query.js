import {gql} from 'graphql-tag';

export const GET_BOOKS_QUERY = gql`
    {
        books{
            name
            id
        }
    }
`