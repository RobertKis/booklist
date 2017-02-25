import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component{
    renderList(item){ 
        console.log(item);       
        <li 
        key={item.name}
        onClick={() => this.props.selectBook(item.book)}
        className="list-group-item">
            name: {item.name}
            pages: {item.pages}
        </li>
    }

    render(){
        console.log("list books: " + this.props.books);
        return (
            <ul>
                {this.props.books.map(item => {
                    return this.renderList(item);
                })}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
    books: state.books
    };
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the result should be passed
    //to all of our reducers
    //first is the key
    //second is the imported value
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({select})
// }

export default connect(mapStateToProps, mapDispatchToProps)(BookList)