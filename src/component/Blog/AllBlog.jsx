import { Link } from "react-router-dom";

const AllBlog = (props) => {
  return (
    <section className="max-w-6xl text mx-auto my-8">
      <div className="grid row-span-4 gap-5 grid-cols-4">
        {props.blogs &&
          props.blogs.map((blog, index) => {
            return (
              <div key={index.toString()} className="border p-3 rounded ">
                <img
                  className=" border"
                  src="../../../src/assets/img/05.jpg"
                  alt=""
                />
                <h1 className="font-medium text-lg py-3">{blog.title}</h1>
                <h3 className="text-sm font-bold text-custom">{blog.author}</h3>
                <p className="py-3">{blog.content}</p>
                <Link
                  className="text-sm font-medium italic hover:text-custom duration-300"
                  to="/"
                >
                  Read More
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AllBlog;
