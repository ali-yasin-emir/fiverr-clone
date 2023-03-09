import React, { useEffect, useState } from 'react';
import GigCard from '../../components/gigCard/GigCard';
import './Gigs.scss';
import { gigs } from '../../data';
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type) => {
    setSort(type);
  };

  return (
    <div className='gigs'>
      <div className='container'>
        <div className='breadcrumbs'>
          <span>FIVERR</span>
          <span className='operator'>&gt;</span>
          <span>Graphics & Design</span>
          <span>&gt;</span>
        </div>
        <div className='gigsInfo'>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Fiverr's AI
            artists
          </p>
        </div>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type='text' placeholder='min' />
            <input type='text' placeholder='max' />
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>SortBy</span>
            <div onClick={() => setOpen(!open)} className='options'>
              <span className='sortType'>
                {sort === 'sales' ? 'Best Selling' : 'Newest'}
              </span>
              <img src='img/down.png' alt='' />
            </div>
            {open && (
              <div className='rightMenu'>
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {gigs.map((gig) => (
            <GigCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
