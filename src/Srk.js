import React, { Component } from 'react'

export default class srk extends Component {
  render() {

    console.log(this.props);

    return (
      <div>
        <h1>{this.props.baslik}</h1>
        <h2>{this.props.aciklama}</h2>
        {/* <h1>React'ın daha başındayız</h1> */}
        <form action=''>
            <input type="text"/>
            <button>Kaydet</button>
        </form>
      </div>
    )
  }
}
