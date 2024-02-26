import React, { useEffect, useState } from 'react';
import Loader from '../../../Loader';
export default function Compiler() {
  useEffect(() => {
   
    // Load jdoodle-pym.min.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      
      // Initialize pym when the script is loaded
      window.pym = new window.Pym.Parent('https://www.jdoodle.com/embed/v1/ed430f7eac6af248');
     
    };

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
    
     <div data-pym-src="https://www.jdoodle.com/embed/v1/ed430f7eac6af248"></div>

    
    </div>
  );
}
