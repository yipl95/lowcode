// src/editor/layouts/index.tsx
import React from 'react';
import Header from './header';
import Material from './material';
import Setting from './setting';
import Render from './render';

const Layout: React.FC = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col'>
      <div className='h-[50px] flex items-center bg-red-300'>
        <Header />
      </div>
      <div className='flex-1 flex'>
        <div className='w-[200px] bg-green-400'>
          <Material />
        </div>
        <div className='flex-1 bg-blue-400'>
          <Render />
        </div>
        <div className='w-[200px] bg-orange-400'>
          <Setting />
        </div>
      </div>
    </div>
  )
}

export default Layout;
