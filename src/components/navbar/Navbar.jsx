import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'Muharrem İnce',
    isSeller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
            <span className='text'>fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          <span>Sign in</span>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                src='https://yt3.googleusercontent.com/ytc/AL5GRJWqj5akXp60sVRVXj0niclEjKV61Khi3izq9I0SiQ=s900-c-k-c0x00ffffff-no-rj'
                alt=''
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className='options'>
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to='/mygigs'>
                        Gigs
                      </Link>
                      <Link className='link' to='/add'>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className='link' to='/orders'>
                    Orders
                  </Link>
                  <Link className='link' to='/messages'>
                    Messages
                  </Link>
                  <Link className='link' to='/'>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
