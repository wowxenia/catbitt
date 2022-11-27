import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/pages/main/Main';

const AppRouter = () => {
  return (
    <Routes>
      {/* переделать роуты на правильные */}
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<Main />} />
      <Route path='/signup' element={<Main />} />
      <Route path='/login' element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
