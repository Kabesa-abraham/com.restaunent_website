import About from "./components/about/About";
import CustomerReview from "./components/customerReview/CustomerReview";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PremuinDish from "./components/premuinDish/PremuinDish";
import Repas from "./components/repas/Repas";

function App() {
  return (
    <div className='' >
         <Header/>
         <Home/>
         <Repas/>
         <About/>
         <PremuinDish/>
         <CustomerReview/>
    </div>
  )
}

export default App;