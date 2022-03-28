import React from "react";


const Link = (props) => {
  const { name, link } = props.routes;
  return (
    <nav>
      
      <li className="mr-16">
        <a href={link}>{name}</a>
      </li>
    </nav>
  );
};

export default Link;
