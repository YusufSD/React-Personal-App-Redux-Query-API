import React, { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

function ExpandablePanel({ children, header }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="panelDiv">
      <div className="arrangement">
        <div className="arrangement">{header}</div>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {expanded ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>

      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
