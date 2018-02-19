import React from 'react';
import $ from 'jquery'
class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // decription: null,
      // quantity:null,
      id:10,
    }
this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  let des = $('#description').val()
  let quan = $('#quantity').val()
  let newItem = {id:this.state.id, quantity:quan, description: des}
  $.post('/grocery',newItem).done(function(){
    console.log('posted to database')
  }).fail(function(er){
    console.log(er, 'bad post request')
  }).then(
    $.get('/grocery').done(function(data){
      console.log(data)
    }).fail(function(){
      console.log(er, 'bad get request')
    })
  )
  // this.props.handleNewItem(des, quan)
  this.setState({id: this.state.id + 1})
}
  render () {
    return (
      <button onClick = {this.handleClick} >Add Grocery</button>
    );
  }
}

export default AddGrocery;

