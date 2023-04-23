import React from 'react';

const PostCard = ({ post }) => {
  return (
      <div className="bg-white shadow-lg rounded-lg p-8 m-10">
        <h1 className="transition duration-700 text-center cursor-pointer hover:text-pink-600 text-xl font-semibold">
          Title : <span className='font-medium'>{post.title}</span>
        </h1>
        <h4 className="transition duration-700 text-center cursor-pointer hover:text-pink-600 text-base font-semibold">
          Body : <span className='font-normal'>{post.body}</span>
        </h4>
        <h4 className="transition duration-700 text-center cursor-pointer hover:text-pink-600 text-base font-semibold">
          Author : <span className='font-normal'>{post.userId}</span>
        </h4>
      </div>
  );
};

export default PostCard;
