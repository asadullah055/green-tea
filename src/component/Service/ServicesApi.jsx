import React, { useEffect, useState } from "react";
import Services from "./Services";

function ServicesApi() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch(`https://dummyjson.com/products`);
      let data = await res.json();
      setServices(data.products);
    })();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-8">
      <Services services={services} />
    </div>
  );
}

export default ServicesApi;
