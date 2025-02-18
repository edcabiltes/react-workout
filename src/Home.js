import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'ed', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'baste', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ed', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="Blogs" />
      <BlogList blogs={blogs.filter(blog => blog.author === `ed`)} title="Ed's Blogs" />
    </div>
  )
}

export default Home

