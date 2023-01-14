import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Srk from './Srk.js';

// function App() {
//   return (
//     <div className="App">
//       merhaba dünya
//     </div>
//   );
// }

// fonksiyonu class'a çevirerek de kullanabiliriz bu yapıyı
class App extends Component{
  render(){

    // const sayi = 26;

    const title="React Egitimi";
    const description = "Daha yolun başındayız";

    return (
      <div className="App">
        {/* merhaba dünya
        <h1>2+2</h1>
        <h1>{2+2}</h1>
        "saffet".toUpperCase() <br></br>
        {"saffet".toUpperCase()}
        <h4>{sayi}</h4> */}

        <Srk baslik={title} aciklama={description}/>
      </div>
    );
  }
}

export default App;
