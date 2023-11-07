import BlogData from "../component/Blog/BlogData";
import LeatestPost from "../component/Blog/LeatestPost";
import SingleBlog from "../component/Blog/SingleBlog";

const Blog = () => {
  return (
    <div>
      <BlogData></BlogData>
      <LeatestPost></LeatestPost>
      <SingleBlog></SingleBlog>
    </div>
  );
};

export default Blog;
