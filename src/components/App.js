import React, { Component } from "react";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";  

class App extends Component {
 
  render(){
    return(
      <div className="main-container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;

