import React from "react";
import SingleService from "./SingleService";

function Services({ services }) {
  return (
    <div className="grid gap-5 grid-cols-4">
      {services.length > 0
        ? services.slice(12).map((service, index) => {
            return <SingleService key={index.toString()} service={service} />;
          })
        : ""}
    </div>
  );
}

export default Services;
