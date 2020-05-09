import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
    displayBookDetails(){
        const { book } = this.props.data;
        if(book){
            return(
                <div id="book-details">
                    <h2>{ book.name }</h2>
                    <p>Genre: { book.genre }</p>
                    <p>Author: { book.author.name }</p>
                    <p>All books by { book.author.name }</p>
                    <ul id="book-list-side">
                        { book.author.books.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div id="book-details" >Please select a Book first</div> );
        }
    }
    render(){
        return(
            <div id="book-details">
                { this.displayBookDetails() }
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id:props.bookid
            }
        }
    }
})(BookDetails);