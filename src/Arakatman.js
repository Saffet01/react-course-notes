import React, { Component } from 'react';
import Srk from './Srk.js';

class Arakatman extends Component {
  render() {
    return (
      <div>
        {
            this.props.dizim.map(dizim => 
                <Srk name={dizim.name} lastName={dizim.lastName}/>
                )
        }
      </div>
    )
  }
}
export default Arakatman;