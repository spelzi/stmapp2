import React from "react";
import "../component/style.css";
import Popups from "./Popups";
import { useState } from "react";

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="home">
      <header className="header">
        <h1>
          🌺🌺TO MY ONE AND ONLY SPECIAL ONE🌺🌺
          <br />
          <br /> 🌺🌺UGOCHI🌺🌺
        </h1>
      </header>
      <body>
        <div className="h2">
          <h2>CLICK HERE</h2>
        </div>
        <div className="icon">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div className="button">
          <button onClick={() => setButtonPopup(true)}>Click Me</button>
          <Popups trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>TO MY WORLD CUTEST </h2>
            <p>
              My baby girl for lifE, My cutie goddess have a Wonderful
              day😘😘😘😘
            </p>
          </Popups>
        </div>
      </body>
      <footer>
        <h2>@From St Manuel</h2>
      </footer>
    </div>
  );
};

export default Home;
