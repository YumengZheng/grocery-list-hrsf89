import React from 'react';
import $ from 'jquery'
class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // decription: null,
      // quantity:null,
    }
this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  var des = $('#description').val()
  var quan = $('#quantity').val()
  this.props.handleNewItem(des, quan)
}
  render () {
    return (
      <button onClick = {this.handleClick} >Add Grocery</button>
    );
  }
}

export default AddGrocery;

