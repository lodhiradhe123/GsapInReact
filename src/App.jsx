import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const bheemref = useRef(null);

  useGSAP(() => {
    gsap.to(bheemref.current, {
      x: "1000px",
      scale: 2,
      duration: 2,
      delay:1
    });
  });

  return <div id="box" ref={bheemref}></div>;
}

export default App;
