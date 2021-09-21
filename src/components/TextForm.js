import { useState } from "react";

function TextForm(props) {
  const [text, settext] = useState("");

  const HandleOnchange = (event) => {
    settext(event.target.value);
  };

  const HandleUpClick = () => {
    let UpText = text.toUpperCase();
    settext(UpText);
    props.ShowAlert("Converted To Uppercase!", "success");
  };

  const HandleLoClick = () => {
    let LoText = text.toLowerCase();
    settext(LoText);
    props.ShowAlert("Converted To LowerCase!", "success");
  };

  const HandleCopyClick = () => {
    let box = document.getElementById("box");
    box.select();
    let copybtn = document.getElementById("copybtn");
    copybtn.innerHTML = "Copied To Clipboard";
    document.execCommand("copy");
    props.ShowAlert("Copied To Clipboard Successfully!", "success");
    document.getSelection().removeAllRanges();
  };

  const HandleExtraSpacesClick = () => {
    let extraspace = text.split(/[ ]+/);
    settext(extraspace.join(" "));
    props.ShowAlert("Remove Extra Spaces Successfully!", "success");
  };

  const HandleClearClick = () => {
    let ClearText = "";
    settext(ClearText);
    props.ShowAlert("Cleared Successfully!", "success");
  };

  return (
    <>
      <div
        className="container mt-5 pb-3"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-2">
          <h1>{props.heading}</h1>
          <textarea
            id="box"
            className="form-control"
            rows="3"
            value={text}
            onChange={HandleOnchange}
            style={{
              background: props.Mode === "dark" ? "rgb(29 29 30)" : "white",
              color: props.Mode === "dark" ? "white" : "black",
            }}
            required
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-success mt-2"
          onClick={HandleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mt-2 ms-xl-2 ms-md-2 ms-sm-1"
          onClick={HandleLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mt-2 ms-xl-2 ms-md-2 ms-sm-1"
          id="copybtn"
          onClick={HandleCopyClick}
        >
          CopyText
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mt-2 ms-xl-2 ms-md-2 ms-sm-1"
          onClick={HandleExtraSpacesClick}
        >
          Remove ExtraSpaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mt-2 ms-xl-2 ms-md-2 ms-sm-1"
          onClick={HandleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container mt-5 text-center mb-2"
        style={{
          color: props.Mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="dark-text fs-1">Your Text Summary</h1>
        <p className="text-secondary">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Word {text.length} Characters
        </p>
        <p className="text-secondary">
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2 className="mt-4">Text Preview</h2>
        <p className="fs-5">{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

export default TextForm;
