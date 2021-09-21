import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lowercase = word.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.Alert && (
        <div
          className={`alert alert-${props.Alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.Alert.type)}</strong>: {props.Alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
