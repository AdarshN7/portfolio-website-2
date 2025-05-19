
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              <span className="text-primary">Adarsh</span>Portfolio
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Adarsh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
