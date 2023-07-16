import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";


const ResumeButton = () => {
  const openResumePage = () => {
    window.open('https://drive.google.com/file/d/1lNYg04hfCecS5JUL-Fgq5SN58RwNc-6P/view?usp=sharing');
  };

  return (
    <a
    href="https://drive.google.com/file/d/1lNYg04hfCecS5JUL-Fgq5SN58RwNc-6P/view?usp=sharing"
    target="_blank"
    rel="noreferrer">
    <FontAwesomeIcon
        icon={faStickyNote}
        className="homepage-social-icon"
    />
</a>
  );
};

export default ResumeButton;
