import { useEffect, useState } from "react";

const TopSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("../../../src/assets/data.json");
      const data = await res.json();
      setProducts(data);
    })();
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl text mx-auto my-10 p-3">
        <h1 className="text-4xl font-medium text-center p-3 my-5">
          Our Best <span className="text-custom">Sales</span> Products
        </h1>
        <div className="grid w-full gap-6 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-4  ">
          {products.splice(0, 4).map((product) => (
            <div key={product.id} className="">
              <div className="border relative">
                <img className="h-60 w-full" src={product?.image} alt="" />
                <span className="absolute top-3  text-sm left-3 h-11 w-11 rounded-full bg-custom text-white font-semibold text-center leading-10">
                  Sale
                </span>
                <span className="absolute top-3  text-sm right-3 h-11 w-11 rounded-full bg-custom text-white font-semibold text-center leading-10">
                  {product.percent}
                </span>
              </div>
              <div className="p-2">
                <h3 className="text-gray-500 font-semibold">{product.title}</h3>
                <p>
                  <span className="text-gray-800 text-sm font-bold">
                    ${product.rprice}
                  </span>{" "}
                  <span className="text-gray-500 text-sm font-bold line-through">
                    - ${product.dprice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSale;
