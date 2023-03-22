import React, { Component } from "react";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";  

class App extends Component {
  constructor()  {
    super();
  }

  render(){
    return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>  
    )
  }
}

export default App;

