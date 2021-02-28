import React, { useState } from "react";
import Personal from "./components/Personal";
// import Education from "./components/Education";

const App = () => {
  const [editable, setEditable] = useState(true);
  const [personalName, setPersonalName] = useState("Demo");
  const [personalEmail, setPersonalEmail] = useState("abc@xyz.com");
  const [personalPhone, setPersonalPhone] = useState("9800000000");

  let content = (
    <div className="callout-warning">
      <Personal
        editable={editable}
        personalName={personalName}
        setPersonalName={setPersonalName}
        personalEmail={personalEmail}
        setPersonalEmail={setPersonalEmail}
        personalPhone={personalPhone}
        setPersonalPhone={setPersonalPhone}
      />
    </div>
  );

  return (
    <div className="container">
      <button className="btn btn-dark"
        onClick={() => {
          setEditable(!editable);
        }}
      >
        {editable ? "Done" : "Edit"}
      </button>
      {content}
    </div>
  );
};

export default App;
