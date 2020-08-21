import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => <div>HELLO WORLD</div>;
const OtherWorld = () => <div>OTHER WORLD</div>;
const AnotherWorld = () => <div>ANOTHER WORLD</div>;

const SuperWorld = () => (
  <div>
    <div>
      <h1>easy peasy</h1>
    </div>
    <HelloWorld />
    <OtherWorld />
    <AnotherWorld />
  </div>
);

ReactDOM.render(<SuperWorld />, document.getElementById("root")); // <함수 />, ~ html id
