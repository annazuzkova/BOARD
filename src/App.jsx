import "./scss/global/_reset.scss";
import "modern-normalize";
import Games from "./components/games/Games";
import DontWork from "./components/global/DontWork";
import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Webpage from "./components/Webpage";
import SubscriptionForm from "./components/global/SubscriptionForm";
import BuyForm from "./components/global/BuyForm";
class App extends React.Component{
  state={
   dontWorkOpen: false,
  }

    openDontWork=()=> {
      this.setState({ dontWorkOpen: true})
  };
    closeDontWork=()=> {
      this.setState({ dontWorkOpen: false})
  };

render(){
//     return(<><Header/><Games/> {this.state.dontWorkOpen && (
//            <DontWork onClose={this.closeDontWork}/>
//           )}
//  <button onClick={this.openDontWork}>ok</button></>)
return(
<BrowserRouter>
 {/* <nav>
        <Link to="/webpage">Header</Link>
        <Link to="/game">Games</Link>
      </nav> */}
 <Routes>
   <Route path="/webpage" element={<Webpage />} />
   <Route path="/game" element={<Games />} />
  </Routes>
</BrowserRouter>)
}

}

export default App;
