import React from 'react';

const Header = () => {
  return (
    <div className="container max-w-full mb-8">
      <div className=" w-full inline-block bg-black py-8">
        <div className="md:float-left block">
          <span className="cursor-pointer font-bold text-3xl px-10 text-white">
            Blogs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
