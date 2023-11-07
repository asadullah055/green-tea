import { useRef, useState } from "react";
import Projects from "./Projects";

const ProjectFrom = () => {
  const [project, setProject] = useState([]);
  let title,
    technology,
    feature,
    details = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromObject = {
      title: title.value,
      technology: technology.value,
      feature: feature.value,
      details: details.value,
    };
    setProject((prevState) => {
      return [...prevState, fromObject];
    });
  };
  return (
    <div className="max-w-6xl mx-auto my-8">
      <div className="flex justify-center">
        <div className="w-1/2">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
              <p className="font-bold text-sm py-3">Project Title</p>
              <input
                ref={(a) => (title = a)}
                className="border-gray-500 border rounded p-3 outline-none w-full "
                type="text"
                name="title"
                placeholder="Write your Project Title"
              />
            </label>
            <label htmlFor="">
              <p className="font-bold text-sm py-3">Technologies</p>
              <input
                ref={(b) => (technology = b)}
                className="border-gray-500 border rounded p-3 outline-none w-full "
                type="text"
                name="technology"
                placeholder="Technologies separate By (,)"
              />
            </label>
            <label htmlFor="">
              <p className="font-bold text-sm py-3">Features</p>
              <input
                ref={(c) => (feature = c)}
                className="border-gray-500 border rounded p-3 outline-none w-full "
                type="text"
                name="feature"
                placeholder="Number 1. 2. ....."
              />
            </label>
            <label htmlFor="">
              <p className="font-bold text-sm py-3">Details</p>
              <textarea
                ref={(d) => (details = d)}
                className="border-gray-500 border rounded p-3 outline-none w-full "
                placeholder="Write your Project Title"
                name="details"
                id=""
                cols="30"
                rows="7"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-custom text-white p-3 px-6 rounded-full"
            >
              Submit
            </button>
          </form>
          {project.length > 0 ? <Projects project={project}></Projects> : ""}
        </div>
      </div>
    </div>
  );
};

export default ProjectFrom;
