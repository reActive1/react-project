import './App.css';
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import ChooseTotalTime from "./Components/ChooseTotalTime";
import {SidebarData} from "./Components/SidebarData";
import ExerciseForm from "./Components/ExerciseForm";
import ChooseExrcise from "./ChooseExrcise";
import Timer from "./Components/Timer";

function App() {
  return (
    <Router> 
    <div className="App">
      <Sidebar />
      <Route path={"/"} exact component={Home}></Route>
      { SidebarData.map((item, index) => {
        return (
          <Route key={index} path={item.link} exact component={item.component}></Route>
        )
      })}
      <Route path="/ChooseTotalTime" component={ChooseTotalTime}/>
      <Route path="/ChooseExrcise/:trainingtime/:restTime"
                   render={(props) => (
                   <ChooseExrcise {...props}/>
                 )}/>
      <Route path="/ExerciseForm" component={ExerciseForm} />
      {/* Temporary Timer route- allows to display or work on Timer component */}
      <Route path="/Timer" exact component={() => <Timer time={20*60*1000} />} /> 
    </div>
    </Router>
  );
}

export default App;