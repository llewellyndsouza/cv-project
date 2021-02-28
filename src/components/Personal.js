import React, { useEffect } from "react";

const Personal = (props) => {
  const { editable, personalName, setPersonalName } = props;

  let content = "";

  const updatePersonalName = (e) => {
    setPersonalName(e.target.value);
  };

  if (editable) {
    content = (
      <input className="form-control" id="personalNameInput" onChange={updatePersonalName} type="text" />
    );
  } else {
    content = <p className="lead">{personalName}</p>;
  }

  useEffect(() => {
    if (editable)
      document.getElementById("personalNameInput").value = personalName;
  });

  return (<div className="container">{content}</div>);
};

export default Personal;
