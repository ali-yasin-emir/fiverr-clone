import React from 'react';
import './Gig.scss';
import { gigs } from '../../data.js';
import Slider from 'infinite-react-carousel';
const Gig = () => {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <div className='breadcrumbs'>
            <span>FIVERR</span>
            <span className='operator'>&gt;</span>
            <span>Graphics & Design</span>
            <span>&gt;</span>
          </div>
          <h1>I will create AI generated art for you</h1>
          <div className='user'>
            <img className='round' src={gigs[1].pp} alt='' />
            <span>Martin Eden</span>
            <div className='stars'>
              <div className='images'>
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
              </div>
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScoll={1} className='slider'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/269173970/original/925ec3e10e4d09d5f1ab5977b56b49ec99396bc2/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/269173970/original/c523ded3da71d72a98d30dcd0f2b41b120e1d690/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/269173970/original/a8f5f45a3e854be59a75f04efb6b202c5fc00021/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/07c2039e2e6b48df196abaeb56b65df7-1677969020/Collage%20Final/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/40a4978eb541fae206abcbf5efdfe653-1677476388/Sea/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/d33512d55369aab01a77ba1aebf4da1a-1673330477/Rooms_/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a4786c2651cfc68829301dc79bf65755-1672684874/CollageFinal/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/6469c8307082854ddb4fb0bf83f294e0-1672298466/Final_/create-profesional-art-work-using-an-artificial-intelligence.png'
              alt=''
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Welcome to my Fiverr page! I specialize in all AI types, not only
            Midjourney or Stable depending of your needs. With the help of
            advanced algorithms and cutting-edge technology, I am able to
            produce stunning and one-of-a-kind pieces that are sure to impress.
            Each piece is carefully crafted and designed to be unique, so you
            can be sure that you are getting a truly one-of-a-kind piece of art.
            Whether you are looking for something to hang on your wall, getting
            your ideas flow, an image for your website or social media, or
            simply to make things for fun. I can create the perfect piece for
            you. So if you want to add a touch of creativity and technology to
            your collection, look no further!
          </p>

          <div className='seller'>
            <h2>About The Seller</h2>
            <div className='user'>
              <img src={gigs[1].pp} alt='' />
              <div className='info'>
                <span>Martin Eden</span>
                <div className='stars'>
                  <div className='images'>
                    <img src='/img/star.png' alt='' />
                    <img src='/img/star.png' alt='' />
                    <img src='/img/star.png' alt='' />
                    <img src='/img/star.png' alt='' />
                    <img src='/img/star.png' alt='' />
                  </div>
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className='box'>
              <div className='items'>
                <div className='item'>
                  <span className='title'>From</span>
                  <span className='desc'>Mexico</span>
                </div>
                <div className='item'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Aug 2022</span>
                </div>
                <div className='item'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>1 hour</span>
                </div>
                <div className='item'>
                  <span className='title'>Last delivery</span>
                  <span className='desc'>about 18 hours</span>
                </div>
                <div className='item'>
                  <span className='title'>Languages</span>
                  <span className='desc'>Spanish, English</span>
                </div>
              </div>
              <hr />
              <p>
                I'm a graphic design student working with computer programs such
                as photoshop to create digital art and logos for different
                people for over 5 years. Now, I'm exploring the designs through
                artificial intelligence to make art concepts that can be used as
                inspiration to create marvelous things. Many people are afraid
                of AI, but don't be scared of it! Embrace the future{' '}
              </p>
            </div>
          </div>

          <div className='reviews'>
            <h2>Reviews</h2>
            <div className='item'>
              <div className='user'>
                <img className='round' src={gigs[0].pp} alt='' />
                <div className='info'>
                  <span>Ruth Morse</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <div className='images'>
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                </div>
                <span>5</span>
              </div>
              <p>
                Honestly they came out even better than we originally discussed.
                Even went above and beyond to make sure I was happy. If I could
                give a 10 out of 10 I would. Helpful?
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <div className='yes'>
                  <img src='/img/like.png' alt='' />
                  <span>Yes</span>
                </div>
                <div className='no'>
                  <img src='/img/dislike.png' alt='' />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img className='round' src={gigs[0].pp} alt='' />
                <div className='info'>
                  <span>Ruth Morse</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <div className='images'>
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                </div>
                <span>5</span>
              </div>
              <p>
                Honestly they came out even better than we originally discussed.
                Even went above and beyond to make sure I was happy. If I could
                give a 10 out of 10 I would. Helpful?
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <div className='yes'>
                  <img src='/img/like.png' alt='' />
                  <span>Yes</span>
                </div>
                <div className='no'>
                  <img src='/img/dislike.png' alt='' />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img className='round' src={gigs[0].pp} alt='' />
                <div className='info'>
                  <span>Ruth Morse</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <div className='images'>
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                </div>
                <span>5</span>
              </div>
              <p>
                Honestly they came out even better than we originally discussed.
                Even went above and beyond to make sure I was happy. If I could
                give a 10 out of 10 I would. Helpful?
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <div className='yes'>
                  <img src='/img/like.png' alt='' />
                  <span>Yes</span>
                </div>
                <div className='no'>
                  <img src='/img/dislike.png' alt='' />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img className='round' src={gigs[0].pp} alt='' />
                <div className='info'>
                  <span>Ruth Morse</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <div className='images'>
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                </div>
                <span>5</span>
              </div>
              <p>
                Honestly they came out even better than we originally discussed.
                Even went above and beyond to make sure I was happy. If I could
                give a 10 out of 10 I would. Helpful?
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <div className='yes'>
                  <img src='/img/like.png' alt='' />
                  <span>Yes</span>
                </div>
                <div className='no'>
                  <img src='/img/dislike.png' alt='' />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className='right'>
          <div className='price'>
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className='details'>
            <div className='item'>
              <img src='/img/clock.png' alt='' />
              <span>2 Days Delivery</span>
            </div>
            <div className='item'>
              <img src='/img/recycle.png' alt='' />
              <span>2 Revisions</span>
            </div>
          </div>
          <div className='features'>
            <div className='item'>
              <img src='/img/greencheck.png' alt='' />
              <span>Prompt writing</span>
            </div>
            <div className='item'>
              <img src='/img/greencheck.png' alt='' />
              <span>Prompt delivery</span>{' '}
            </div>
            <div className='item'>
              <img src='/img/greencheck.png' alt='' />
              <span>Artwork delivery</span>
            </div>
          </div>
          <button>
            <span>Continue</span>
            <span>&#8594;</span>
          </button>
          <button className='btn-contact'>Contact Seller</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
