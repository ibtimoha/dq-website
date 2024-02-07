import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Translate from '@docusaurus/Translate';
import ContactUsButton from '../../components/ContactBtn';
import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

export default function BlogPostItemWrapper(props) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const showAnim = gsap.from('.navbar', {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        let element = document.querySelector('.navbar');
        if (element) {
          if (self.direction === 1) {
            element.classList.add("my-class");
          }
          if (self.direction === -1) {
            element.classList.add("up");
          }
          if (self.progress === 0) {
            element.classList.remove("up");
            element.classList.remove("my-class");
          }
        }
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

  })

  return (
    <>
      <BlogPostItem {...props} />
      <section className="blog-contact">
            <h3 className='section-title text--center'><Translate>general.contactus.title</Translate><span className='orange'>.</span>
            </h3>
            <div className=''>
              
                  <div className='contact_people__item'>
                    
                    <div className='people-profile'>
                        <img src='../img/competence-images/tom_freddy.webp'></img>
                      </div>
                    <div className='contact_item-content'>
                      <div className='contact-people-detail'>
                      <p className='orange'>Sales and marketing manager</p>
                        <h3>Tom Freddy Braathen</h3>
                        <a href="mailto:salg@digiquip.no" class="btn__lined" aria-label="salg@digiquip.no" target="_self">
                          <span class="btn__wrapper">
                            <span class="btn__text">salg@digiquip.no</span>
                            <span class="btn__icon">
                              <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.1667L10.1667 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M1 1H10.1667V10.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                        <a href="tel:+47 90 77 35 24" aria-label="+47 90 77 35 24" target="_self">
                          <span class="btn__wrapper">
                            <span class="btn__text">+47 90 77 35 24</span>
                          </span>
                        </a>
                      </div>
                      
                    </div>
                  </div>
                
              <div className='text--center'>

               <ContactUsButton />                
              </div>
            </div>
          
      
    </section>
    </>
  );
}
