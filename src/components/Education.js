import React from "react"

class Education extends React.Component {

  render() {
    
    return(
      <div>Educational details {this.props.editable ? "can" : "cannot"} be modified</div>
    )
  }
}

export default Education;