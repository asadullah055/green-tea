import { Link } from "react-router-dom";

const LeatestPost = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-8">
        <div className="flex gap-3">
          <div className="">
            <div className="">
              <img src="../../../src/assets/img/bb01.webp" alt="" />
            </div>
            <div className="my-3">
              <h3 className="font-semibold text-custom py-3 italic">
                Feb 08, 2021
              </h3>
              <h1 className="font-semibold text-xl">
                How to Make Ginger Tea with sabujcha expert.
              </h1>
              <p className="my-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
              <Link
                className="text-sm font-medium italic hover:text-custom duration-300"
                to="/"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src="../../../src/assets/img/bb02.webp" alt="" />
            </div>
            <div className="my-3">
              <h3 className="font-semibold text-custom py-3 italic">
                Feb 08, 2021
              </h3>
              <h1 className="font-semibold text-xl">
                How to Make Ginger Tea with sabujcha expert.
              </h1>
              <p className="my-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
              <Link
                className="text-sm font-medium italic hover:text-custom duration-300"
                to="/"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src="../../../src/assets/img/bb03.webp" alt="" />
            </div>
            <div className="my-3">
              <h3 className="font-semibold text-custom py-3 italic">
                Feb 08, 2021
              </h3>
              <h1 className="font-semibold text-xl">
                How to Make Ginger Tea with sabujcha expert.
              </h1>
              <p className="my-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
              <Link
                className="text-sm font-medium italic hover:text-custom duration-300"
                to="/"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatestPost;
