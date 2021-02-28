import React from "react";

const Education = (props) => {
  let content = ""

  if (props.isEditable) {
    //<input onChange={} type='text' />
  } else {
    //static content
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Education;
