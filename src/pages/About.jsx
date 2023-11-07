import History from "../component/About/History";
import Project from "../component/About/Project";
import Team from "../component/About/Team";
import Welcome from "../component/About/Welcome";

const About = () => {
  return (
    <div>
      <Welcome />
      <History />
      <Team></Team>
      <Project />
    </div>
  );
};

export default About;
