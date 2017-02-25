import React from 'react';
import { connect } from 'react-redux';

class ActiveBook extends React.Component{
    render()
    {
        if(!this.props.book){
            return <div>Please select a book! </div>
        }
        
        return(
            <BookDetails book = {this.props.activeBook} />
        );
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(ActiveBook);