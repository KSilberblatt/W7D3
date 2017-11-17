import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        sfsdfgsdfg 
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default ItemDetail;