import React, { useState } from "react";

const Barra = () => {
  const [view, setView] = useState(false);

  return (
    <div>
      <div className="h-20 flex items-center pl-4 shadow-md justify-between">
        <div>
          <div> Andoni Romano Prueba</div>
        </div>
        <div className="pr-4">
          <div className="hover:text-blue-600 cursor-pointer">Add Info</div>
        </div>
      </div>
      <div className={view ? "display" : "no-display"}></div>
    </div>
  );
};

export default Barra;
