import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin
} from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-[#060606] text-white max-w-7xl mx-auto px-4 md:px-16 py-10 space-y-10">
     <h1 className='text-3xl md:text-4xl  font-bold text-center text-white'>
       <span className='bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text'>Contact Us</span>
     </h1>
      {/* Top Section: Form + Map */}
      <div className="grid md:grid-cols-2 gap-8 bg-[#0a0a0a]  rounded-3xl">
        {/* Form */}
        <div className="space-y-4 border border-gray-700 p-5 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-semibold">Have any questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="bg-black border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <input type="text" placeholder="Last Name" className="bg-black border border-gray-700 px-4 py-3 rounded-lg" />
            <input type="text" placeholder="Phone No." className="bg-black border border-gray-700 px-4 py-3 rounded-lg" />
            <input type="email" placeholder="Email Address" className="bg-black border border-gray-700 px-4 py-3 rounded-lg" />
          </div>
          <textarea rows="4" placeholder="Write Message..." className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg resize-none"></textarea>
          <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] py-2 px-4 cursor-pointer rounded-full text-white font-semibold hover:opacity-90 transition-all">
            Submit Now
          </button>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden h-[420px]">
          <iframe
            title="Google Map"
            className="w-full h-full"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29323.189231278346!2d77.3557622344015!3d23.264960032742486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6808be9f02a7%3A0x8c119eced013a478!2sKohefiza%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1753698557406!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Contact Us */}
        <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
          <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
            <Phone className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">(+00) 123-254-963<br />(+12) 761 852 339</p>
        </div>

        {/* Email Us */}
        <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
          <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
            <Mail className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-sm">info@domainname.com<br />support@domain.com</p>
        </div>

        {/* Working Hours */}
        <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
          <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
            <Clock className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
          <p className="text-sm">Mon - Fri : 08AM - 10PM<br />Sat - Sun : Closed</p>
        </div>

        {/* Location */}
        <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
          <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-sm">2715 Ash San Jose, USA<br />2715 Ash San Jose, USA</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
