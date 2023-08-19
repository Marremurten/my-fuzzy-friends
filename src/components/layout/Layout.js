import React from 'react';
import Header from './Header';

const Layout = ({ children, petType, setPetType }) => {
  return (
    <div className="w-full min-h-screen bg-color2 font-caveat text-[18px]">
      <main className="container px-4 py-8 mx-auto">
        <Header petType={petType} setPetType={setPetType} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
