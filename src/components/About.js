import React from "react";

export default function About(props) {
  let DarkModeStyle = {
    color: props.Mode === "dark" ? "white" : "black",
    borderColor: props.Mode === "dark" ? "#fff" : "black",
    backgroundColor: props.Mode === "dark" ? "rgb(29 29 30)" : "white",
  };

  return (
    <div
      className="container py-3 px-3 rounded mt-4 mb-3"
      style={DarkModeStyle}
    >
      <h1 className="my-3 fs-1 text-center">About Us</h1>
      <div className="accordion" id="accordionExample" style={DarkModeStyle}>
        <div className="accordion-item" style={DarkModeStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={DarkModeStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> Gives You a Way To Analyze your Text
              quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={DarkModeStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={DarkModeStyle}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is a free character counter tool that
              provides instant character count & word count statistics for a
              given text. TextUtils reports the number of words and characters.
              Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={DarkModeStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={DarkModeStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
