import React from "react";

function Form(props) {
  return (
    <form>
      <input type="text"
       onChange={props.handleFirstName} 
       value={props.firstName} />

      <input type="text"
       onChange={props.handleLastName}
        value={props.lastName} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
