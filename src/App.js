
import {Routes,Route} from "react-router-dom"

import './App.css';
import Home from './components/Home';
import UpcomingRoute from "./components/UpcomingRoute"
import TopRated from "./components/TopRated";

function App() {
  return (
    <div className="App">
      k
      <Routes>
        <Route exact path="/" Component={Home} /> 
        <Route exact path="/upcoming" Component={UpcomingRoute}/>
        <Route exact path="/TopRate" Component={TopRated} /> 
      </Routes>
      
    </div>
  );
}

export default App;
