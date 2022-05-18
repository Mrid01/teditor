import React from "react";

function Alert(props) {
  return (
    props.alert && <>
    <div className="container">
      <div
        className={`d-flex justify-content-center  alert alert-${props.alert.type} alert-dismissible fade show position-right`}
        role="alert"
      >
        <strong> {props.alert.msg}</strong>
        
      </div>
      </div>
    </>
  );
}

export default Alert;
