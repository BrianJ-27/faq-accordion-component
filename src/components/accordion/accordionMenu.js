import React from "react";

const AccordianMenu = ({ id, title, content }) => {
  return (
    <React.Fragment>
      <details key={id}>
        <summary className="title__accordian">
          <strong> {title} </strong>
        </summary>
        <p className="content"> {content} </p>
      </details>
    </React.Fragment>
  );
};

export default AccordianMenu;
