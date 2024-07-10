import "./ImageComp.css";
import { useState } from "react";
function ImageComp() {
  let [title, setTitle] = useState("React");

  let [url, setUrl] = useState(
    "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
  );

  const changeToAngular = () => {
    setUrl(
      "https://th.bing.com/th/id/OIP.cGDDA2mfYkjiIhGaN8gDoAHaEK?rs=1&pid=ImgDetMain"
    );
    setTitle("Angular");
  };

  const changeToReact = () => {
    setUrl(
      "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    );

    setTitle("React");
  };

  return (
    <div id="ImageComp">
      <h1 style={{ color: "red" }}>{title}</h1>
      <img src={url} width="500" height="300" />
      <br />
      <br />
      <button onClick={changeToReact}>React</button>
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default ImageComp;
