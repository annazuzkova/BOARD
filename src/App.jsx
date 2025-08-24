import "./scss/global/_reset.scss";
import "modern-normalize";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

function App() {
  return ( 
  <>
  <Header></Header>
  <Section1></Section1>
  <Section2></Section2>
  <Section3></Section3>
  </>
  )
}

export default App;