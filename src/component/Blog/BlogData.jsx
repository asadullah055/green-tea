import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";

const myDatas = [
  {
    id: 1,
    title: "My First Blog Post",
    author: "John Doe",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my first blog post. I'm excited to share my thoughts and experiences with the world.",
  },
  {
    id: 2,
    title: "My Second Blog Post",
    author: "Jane Doe",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my second blog post. I'm going to talk about my favorite programming languages.",
  },
  {
    id: 3,
    title: "My Third Blog Post",
    author: "Peter Jones",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my third blog post. I'm going to share a recipe for my favorite chocolate chip cookies.",
  },
  {
    id: 4,
    title: "My Fourth Blog Post",
    author: "Susan Williams",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my fourth blog post. I'm going to talk about my favorite books.",
  },
  {
    id: 5,
    title: "My Fifth Blog Post",
    author: "David Miller",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my fifth blog post. I'm going to talk about my favorite movies.",
  },
  {
    id: 6,
    title: "My Sixth Blog Post",
    author: "Sarah Brown",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my sixth blog post. I'm going to talk about my favorite travel destinations.",
  },
  {
    id: 7,
    title: "My Seventh Blog Post",
    author: "Michael Johnson",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my seventh blog post. I'm going to talk about my favorite hobbies.",
  },
  {
    id: 8,
    title: "My Eighth Blog Post",
    author: "Jessica Smith",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my eighth blog post. I'm going to talk about my favorite foods.",
  },
  {
    id: 9,
    title: "My Ninth Blog Post",
    author: "William Davis",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my ninth blog post. I'm going to talk about my favorite music.",
  },
  {
    id: 10,
    title: "My Tenth Blog Post",
    author: "Elizabeth Garcia",
    date: "2023-11-05T03:36:20Z",
    content:
      "This is my tenth blog post. I'm going to talk about my favorite quotes.",
  },
];

function BlogData() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(myDatas);
  }, []);

  return (
    <>
      <AllBlog blogs={blogs} />
    </>
  );
}

export default BlogData;
