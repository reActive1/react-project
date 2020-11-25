import './App.css';
import Sidebar from "./Components/Sidebar"
import { Route, Switch } from 'react-router-dom'
import { Exercise } from './Components/Exercise';
import Home from "./Components/Home"
import Overview from "./Components/Overview"
import CreateYourTrain from './Components/CreateYourTrain';

import {SidebarData} from "./Components/SidebarData"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route path={"/"} exact component={Home}></Route>
      { SidebarData.map((item, index) => {
        return (
          <Route path={item.link} exact component={item.component}></Route>
        )
      })}
    </div>
  );
}

export default App;
