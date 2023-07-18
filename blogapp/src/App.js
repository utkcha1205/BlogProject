// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/blogposts');
      console.log(response,"Asdasf")
      setBlogPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateBlogPost = async () => {
    try {
      await axios.post('http://localhost:3000/api/blogposts', { title, content });
      fetchBlogPosts();
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Blog Platform</h1>
      <div>
        <h2>Create Blog Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleCreateBlogPost}>Create</button>
      </div>
      <div>
        <h2>Blog Posts</h2>
        {blogPosts.map((blogPost) => (
          <div key={blogPost._id}>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
