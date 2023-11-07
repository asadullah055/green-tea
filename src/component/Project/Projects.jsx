import ShowProject from "./ShowProject";

const Projects = ({ project }) => {
  return (
    <div>
      <div className="">
        {project.map((item, index) => {
          return (
            <ShowProject
              key={index.toString()}
              index={index + 1}
              item={item}
            ></ShowProject>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
