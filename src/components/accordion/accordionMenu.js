import React from "react";

const AccordianMenu = ({ id, title, content }) => {
  return (
    <details key={id}>
      <summary className="title__accordian flex__container">
        <strong> {title} </strong>
      </summary>
      <p className="content"> {content} </p>
    </details>
  );
};

export default AccordianMenu;
