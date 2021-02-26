import React from "react"

class Personal extends React.Component {

  render() {
    
    return(
      <div>Personal details {this.props.editable ? "can" : "cannot"} be modified</div>
    )
  }
}

export default Personal;