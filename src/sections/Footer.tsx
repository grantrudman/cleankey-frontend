import Insta from '@/assets/social-insta.svg';
import Linkedin from '@/assets/social-linkedin.svg';
import X from '@/assets/social-x.svg';

export const Footer = () => {
  return (
    <footer className="bg-[#0D4D62] text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          
          {/* Navigation Links */}
          <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
            <a href="#home-section" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Home</a>
            <a href="#services-section" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">How It Works</a>
            <a href="#about-section" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">About</a>
            <a href="#quote-section" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Quote</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-300 text-sm items-center">
            <a href="mailto:cleankey.business@gmail.com" className="hover:text-white transition-colors">cleankey.business@gmail.com</a>
            <a href="tel:+18178894910" className="hover:text-white transition-colors">(817) 889-4910</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-[#5DCCB7] transition-colors">
              <Insta className="w-6 h-6 fill-current" />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#5DCCB7] transition-colors">
              <Linkedin className="w-6 h-6 fill-current" />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#5DCCB7] transition-colors">
              <X className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white pt-6 mt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} CleanKey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};