import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <p className="footer-text">
            &copy; {currentYear} Your Company Name. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;