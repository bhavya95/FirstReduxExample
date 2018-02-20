import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
        key = {book.title}
        onClick = {()=>{this.props.selectBook(book)}}
        className = "list-group-item">
        {book.title}
        </li>
      );
    });
 }
  render(){
    return(
      <ul className = "list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStatetoProps(state) {
  //Whatever is returned will be shown as props inside the BookList
  //this function is the glue between react and redux
  return{
    books: state.books
  }

}

function mapDispatchtoProps(dispatch){
  //Whenever selectBook is called, the result should be passed
  //to all of our reducers
  return(bindActionCreators({selectBook:selectBook}, dispatch))
}
//Promote BookList from a component to container-it needs to know
//about this new dispatch method, selectBook. Make it available
//as a prop.

export default connect (mapStatetoProps, mapDispatchtoProps)(BookList);
