import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editable: true,
    };
  }

  togglePersonalEdit = () => {
    this.setState(()=>{
      if (this.state.editable) return {editable: false}
      else return {editable: true}
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePersonalEdit}>
          {this.state.editable ? "Done" : "Edit"}
        </button>
        <Personal editable={this.state.editable} />
        <Education editable={this.state.editable} />
      </div>
    );
  }
}

export default App;
