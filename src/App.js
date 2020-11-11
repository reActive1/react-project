import './App.css';
import Sidebar from "./Components/Sidebar"
import { Route, Switch } from 'react-router-dom'
import { Exercise } from './Components/Exercise';
import Home from "./Components/Home"
import Overview from "./Components/Overview"

import {SideBarData} from "./Components/SidebarData"

function App() {
  // todo: use map for routes and also create routes for other components
  return (
    <div className="App">
      <Sidebar />
      <Route path="/home" exact component={Home} /> 
      <Route path="/overview" exact component={Overview} /> 

    </div>
  );
}

export default App;
