import React from "react"
import { useState } from "react";

export default function Accordian (): JSX.Element {
//useState and toggle is currently only being used for an odd interaction with react/nextjs.
//Todo: Code below them needs to be refactored to useState or useEffect. Sleep will show the way.
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => {
    setIsShowing(!isShowing);
  };
  if (typeof(window) !== "undefined"){
    const acc = document.getElementsByClassName("accordion")[0];
    console.log(acc)
    acc && acc.addEventListener("click", function() {
      acc.classList.toggle("active");
      const panel = acc.nextElementSibling as Element;

      // why does ts insist that Element has no .style???
    //   if (panel.style.maxHeight) {
    //     panel.style.maxHeight = null;
    //   } else {
    //     panel.style.maxHeight = panel.scrollHeight + "px";
    //   }
    });
  }

  return(
    <>
      <button className="accordion">
        Section 1
      </button>
      <div className="accordianPanel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </>
  )
}