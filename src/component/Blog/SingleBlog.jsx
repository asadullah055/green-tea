import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <div>
      <div className="max-w-6xl text mx-auto my-8">
        <div className="flex flex-col items-center">
          <div className="w-1/2">
            <img src="../../../src/assets/img/0012.jpg" alt="" />
          </div>
          <div className="my-5 w-1/2">
            <h4 className="text-custom text-2xl font-medium">
              How To Make Ginger Tea With Sabujcha Expert.
            </h4>
            <p className="font-medium italic py-3">
              February 08, 2021{" "}
              <span className="text-custom  ">Sabujcha Demo Admin</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aperiam minus, necessitatibus quis ad, totam optio, ratione
              facilis fugiat alias pariatur porro enim architecto? Harum?
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
  );
};

export default SingleBlog;
