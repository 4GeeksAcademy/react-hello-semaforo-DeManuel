import { useState } from "react";
import "./TrafficLight.css";

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="contenedor">
      <img className="semafaro" src="https://th.bing.com/th?q=Imagen+De+Un+Sem%c3%a1foro&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.9&pid=InlineBlock&mkt=es-ES&cc=ES&setlang=es&adlt=moderate&t=1&mw=247" alt="Semáfaro" />
      <button
        className="Color-Red"
        onClick={() => setColor("#a52019")}
        style={{
          backgroundColor: color === "#a52019" ? "#FF3226" : "#a52019",
        }}
      ></button>
      <button
        className="btn-yellow"
        onClick={() => setColor("#C46100")}
        style={{
          backgroundColor: color === "#C46100" ? "#ff7e00" : "#C46100",
        }}
      ></button>
      <button
        className="btn-green"
        onClick={() => setColor("#317f43")}
        style={{
          backgroundColor: color === "#317f43" ? "#09FF06" : "#317f43",
        }}
      ></button>
    </div>
  );
}

export default TrafficLight;
