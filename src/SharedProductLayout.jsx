import { Outlet } from 'react-router-dom';
import React from 'react';



const Home = () => {
  return (
    <>
       <h1 className="text-blue-700 text-center font-black text-8xl">Let the cuteness begin...</h1>
      <Outlet />
    </>
  );
};
export default Home;
