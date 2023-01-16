import React, { Component } from 'react';
import Srk from './Srk.js';
import Form from './Form.js';
import Proptypes from 'prop-types';

class Arakatman extends Component {

  static propTypes={
    dizim : Proptypes.array
  }

  static defaultProps={
    name:'Saffet'
  }

  render() {
    return (
      <div>
        {
          this.props.name
        }
        {
            this.props.dizim.map(dizim => 
                <Srk key={dizim.id} newsDate={dizim} name={dizim.name} lastName={dizim.lastName}/>
                )
        }
        <Form addNews={this.props.addNews}/>
      </div>
    )
  }
}
export default Arakatman;