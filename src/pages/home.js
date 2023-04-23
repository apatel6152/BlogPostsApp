import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import Header from '../components/Header';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [filterValue, setFilterValue] = useState('title');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {

    //fetch blog post from API using axios 
    const getBlogPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(response.data);
        // console.log(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        // console.log(error);
      }
    };
    getBlogPosts();
  }, [error]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  }

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  }

  const filteredPosts = posts.filter((post) => {
    // post[filterValue].toLowerCase().includes(filterText.toLowerCase())
    return (
      post.title.toLowerCase().includes(filterText.toLowerCase()) ||
      post.body.toLowerCase().includes(filterText.toLowerCase()) ||
      post.userId.toString().includes(filterText)
    );
  });

  return (
    <div>
      <Header />
      <div className="filter mb-4 px-10 text-center md:text-right ">
        <label htmlFor="filter" className="font-bold mr-4">
          Filter by:
        </label>
        <select
          id="filter"
          className="rounded-md py-2 px-4"
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option value="title">Title</option>
          <option value="body">Body</option>
          <option value="userId">Author Name</option>
        </select>
        <input
          type="text"
          placeholder={`Search ${filterValue}`}
          className="rounded-md py-2 px-4 ml-4"
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </div>
      <ul>
        {!error ? filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        )) : <h1 className='text-center bg-white shadow-lg rounded-lg p-8 m-10'>{error}</h1>}
      </ul>
    </div>
  );
};

export default Home;
