import React, { useState } from "react";
import Heart from "react-heart";

const Brewery = ({ brewery }) => {
  const [active, setActive] = useState(false);
  return (
    <div clasName="Brewery-container">
      <div>{brewery.name}</div>
      <iframe src={brewery.website_url}></iframe>
      <div style={{ width: "2rem" }}>
        <Heart isActive={active} onClick={() => setActive(!active)} />
      </div>
    </div>
  );
};

export default Brewery;
