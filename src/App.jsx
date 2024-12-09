import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Repas from "./components/repas/Repas";

function App() {
  return (
    <div className='' >
         <Header/>
         <Home/>
         <Repas/>
         <About/>
    </div>
  )
}

export default App;