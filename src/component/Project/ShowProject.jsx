import React, { useState } from "react";

const ShowProject = ({ index, item }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="my-3">
      {show && (
        <div>
          <h2 className="p-2">
            <span className="font-semibold">Project Title:</span> {item.title}
          </h2>
          <p className="p-2">
            {" "}
            <span className="font-semibold">Technology:</span> {item.technology}
          </p>
          <p className="p-2">
            {" "}
            <span className="font-semibold">Feature:</span> {item.feature}
          </p>
          <p className="p-2">
            {" "}
            <span className="font-semibold">Details:</span> {item.details}
          </p>
        </div>
      )}
      <button
        className="bg-custom text-white p-3 px-5 rounded-full"
        onClick={() => setShow(!show)}
      >
        {" "}
        {index} : {show ? " Hide user" : "Show user"}{" "}
      </button>{" "}
    </div>
  );
};

export default ShowProject;
