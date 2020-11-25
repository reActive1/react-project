import './App.css';
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Exercise } from './Components/Exercise';
import Home from "./Components/Home";
import Overview from "./Components/Overview";
import CreateYourTrain from './Components/CreateYourTrain';
import ChooseExrcise from "./ChooseExrcise";
import {SidebarData} from "./Components/SidebarData";

function App() {
  // todo: use map for routes and also create routes for other components
  return (
    <Router> 
    <div className="App">
      <Sidebar />
      <Route path={"/"} exact component={Home}></Route>
      { SidebarData.map((item, index) => {
        return (
          <Route path={item.link} exact component={item.component}></Route>
        )
      })}
      <Route path="/home" exact component={Home} /> 
      <Route path="/overview" exact component={Overview} /> 
      <Route path="/createYourTrain" exact component={CreateYourTrain} />
      <Route path="/ChooseExrcise" component={ChooseExrcise} />
    </div>
    </Router>
  );
}

export default App;
