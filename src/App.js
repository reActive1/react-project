import './App.css';
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Overview from "./Components/Overview";
import CreateYourTrain from './Components/CreateYourTrain';
import ChooseTotalTime from "./Components/ChooseTotalTime";
import Timer from "./Components/Timer";
import {SidebarData} from "./Components/SidebarData";
import ChooseExrcise from "./ChooseExrcise";

function App() {
  // todo: use map for routes and also create routes for other components
  return (
    <Router> 
    <div className="App">
      <Sidebar />
      <Route path={"/"} exact component={Home}></Route>
      { SidebarData.map((item, index) => {
        return (
          <Route key={index} path={item.link} exact component={item.component}> </Route>
        )
      })}
      <Route path="/home" exact component={Home} /> 
      <Route path="/overview" exact component={Overview} /> 
      <Route path="/createYourTrain" exact component={CreateYourTrain} />
      <Route path="/ChooseTotalTime" component={ChooseTotalTime}/>
      <Route path="/ChooseExrcise"
                   render={(props) => (
                   <ChooseExrcise {...props}/>
                 )}/>
      {/* Temporary Timer route- allows to display or work on Timer component */}
      <Route path="/Timer" exact component={() => <Timer time={20*60*1000} />} /> 
    </div>
    </Router>
  );
}

export default App;
