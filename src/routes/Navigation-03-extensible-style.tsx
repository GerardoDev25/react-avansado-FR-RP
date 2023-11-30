import { Suspense } from 'react';
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import { ShoppingPage } from '../03-extensible-style/pages/ShoppingPage';
import logo from '../assets/react.svg';

export const Navigation = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? '' : 'nav-active';

  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              <li>
                <NavLink to='/' className={handleIsActive}>
                  Shopping style
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' className={handleIsActive}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/users' className={handleIsActive}>
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/users' element={<h1>Users</h1>} />
            <Route path='/' element={<ShoppingPage />} />
            <Route path='/*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
