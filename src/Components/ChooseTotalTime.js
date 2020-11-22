import "./CssComponents/ChooseTotalTime.css";
import { Button } from "semantic-ui-react";

function ChooseTotalTime() {
  return (
    <div className="TimeSelection">
      <h1>Select training time (in minutes):</h1>
      <Button.Group>
        <Button className="yellow">20</Button>
        <Button.Or />
        <Button className="orange">30</Button>
        <Button.Or />
        <Button className="red">40</Button>
      </Button.Group>
    </div>
  );
}

export default ChooseTotalTime;
