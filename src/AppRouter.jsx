import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/about/About';
import Main from './components/pages/main/Main';

const AppRouter = () => {
  return (
    <Routes>
      {/* переделать роуты на правильные */}
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Main />} />
      <Route path='/login' element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
