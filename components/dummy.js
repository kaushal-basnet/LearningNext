import React from "react";

const Dummy = () => {
  return (
    <div>
      <style jsx global>
        {`
          .dummy {
            background: yellowgreen;
          }
        `}
      </style>

      <p className="dummy"> Dummy</p>
    </div>
  );
};

export default Dummy;
