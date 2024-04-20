import React from "react";
import AOS from "aos";
import './Contact.css'
import img1 from "../../assets/contactus.jpeg";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
function Contact() {
  return (
    <div className="" style={{fontFamily:'Roboto, sans-serif' }}>
      <div
        className="bg-cover bg-no-repeat	 bg-center m-0 p-0 w-full h-40 2xs:h-44 xs:h-56 sm:h-72 md:h-80 lg:h-96 flex justify-center items-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)),url(${img1})` }}
      >
        <p
          className="shadow-black  text-[#F8F8F8]  text-center font-bold text-xl xs:text-2x sm:text-4xl md:text-5xl"
          data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true"
        >
          Contact Us
        </p>
      </div>
      <div className="py-12 px-6 xs:px-12 flex flex-col justify-center xl:mx-auto xl:max-w-[1268px] ">
        <div className="flex flex-col flex-col-reverse justify-between md:py-12 lg:flex-row ">
          <div className=" md:w-full bg-[#F8F8F8] lg:w-1/2 lg:mr-10 md:pb-10 pb-10  shadow-md justify-center items-center">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="white-space:wrap pt-10 mx-1 3xs:mx-4 2xs:mx-10 text-3xl text-[#00a850e6] font-bold pb-1" style={{fontFamily:'Roboto, sans-serif'}}>Get In Touch</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10 pb-6" style={{fontFamily:'Roboto, sans-serif'}}>
              Grow your business with us. We are looking forward to working with
              you. Please knock us on the given information for any kind of
              assistance.
            </p>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10 text-[#00a850e6] text-xl font-semibold pb-1" style={{fontFamily:'Roboto, sans-serif'}}>Address:</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10 pb-6" style={{fontFamily:'Roboto, sans-serif'}}>
             <b>Lumen Corporation</b> <br/>
            House-07, Road-06, Sector-12, Uttara, Dhaka-1230, Bangladesh.
            </p>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10 text-[#00a850e6] text-xl font-semibold pb-1" style={{fontFamily:'Roboto, sans-serif'}}>Contact Information</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10 pb-0.5">+8801916231759</p>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10 pb-0.5">+8801925425497</p>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="mx-1 3xs:mx-4 2xs:mx-10"> mktg@lumen-bd.com</p>
          </div>

          <div className="block h-12 xl:hidden 2xl:hidden lg:hidden sm:block sm:w-full sm:h-16  md:block md:w-full md:h-20"></div>

          <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="w-full lg:w-1/2 bg-[#F8F8F8] rounded-md shadow-lg hover:shadow-md">
            <div className="3xs:px-0  2xs:px-5 py-6 xs:px-6 flex flex-col">
              <h1  className="text-[#00a850e6] mx-4 mt-2 font-bold text-lg">Contact Us</h1>
              <input
                type="text"
                className="relative 3xs:mx-1 m-4 border-2 p-2 hover:border-cyan-400 flex-grow"
                placeholder="Enter your Name"
                required
              />
              <input
                type="text"
                className="3xs:mx-1 m-4 border-2 p-2 hover:border-cyan-400 flex-grow"
                placeholder="Enter your Email"
                required
              />
              <textarea
                className="3xs:mx-1 m-4 border-2 p-2 hover:border-cyan-400 flex-grow"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <button data-aos="slide-up-right" data-aos-duration="1000" data-aos-once="true" className="focus:text-black 3xs:mx-1 text-[#F8F8F8]  m-4 p-2 h-8 w-12 3xs:h-10 3xs:w-20 shadow-md rounded bg-[#00a850e6] ">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="pt-12 " data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
          <p   className="text-lg sm:text-xl md:text-2xl text-[#00a850e6] lg:text-3xl xl:text-3xl font-bold pb-2">Our Head Office</p>
          <iframe
            className="w-full h-44 shadow-lg md:h-52 lg:h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735.0474865621845!2d90.37422302628654!3d23.8721103093924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40ed3c3c18b%3A0x9521b4915bd8ee05!2sUttara%20Sector-12%20Society!5e0!3m2!1sen!2sbd!4v1700551842504!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Google Maps"
          ></iframe>
        </div>
      </div>
      <div>
        <AnimatedBanner />
        </div>
    </div>
  );
}

export default Contact;
