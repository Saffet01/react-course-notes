import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Srk from './Srk.js';
import Arakatman from './Arakatman';

// function App() {
//   return (
//     <div className="App">
//       merhaba dünya
//     </div>
//   );
// }

// fonksiyonu class'a çevirerek de kullanabiliriz bu yapıyı
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Srk"
    }
  }

  addNews(){
    console.log("Eklendi!");
  }

  changeName(){
    this.setState(
      {
        name:"Ramazan"
      }
    )
  }

  render(){

    // const sayi = 26;
    const dizim = [{
      id:1,
      name :"hiper",
      lastName: "React"
    },
    {
      id:2,
      name :"süper",
      lastName: "React Öğrenmek"
    },
    {
      id:3,
      name :"hiper süper",
      lastName: "React'in kendisi"
    }
    ];

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

        {/* <Srk baslik={title} aciklama={description}/>
        <Srk isim={dizim[0].name} soyisim={dizim[0].lastName}/>
        <Srk isim={dizim[1].name} soyisim={dizim[1].lastName}/>
        <Srk isim={dizim[2].name} soyisim={dizim[2].lastName}/> */}

        <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this)}>Değiştir</button>

        <Arakatman dizim={dizim} addNews={this.addNews}/>

      </div>
    );
  }
}

export default App;
