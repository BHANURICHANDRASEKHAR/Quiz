import React, { useEffect, useRef, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import {toastsuccess} from '../../../toastify'
import {toast} from 'react-toastify'
export default function Editor({ data, type }) {
  const cleanedData = data.replaceAll('```', '').replaceAll(`${type}`, '');
const [status,setstatus]=useState(false)
  const textareaRef = useRef(null);

  function copyTextToClipboard() {
    
    navigator.clipboard.writeText(cleanedData);
    setstatus(true);
    toastsuccess(toast,'Success copied to clipboard')
  }

  useEffect(() => {
    if (textareaRef.current) {
      const lines = cleanedData.split('\n').length;
      textareaRef.current.rows = Math.max(10, lines);
    }
  }, [cleanedData]);

  return (
    <div className='row'>
      <div className='editor'>
      <div className='d-flex justify-content-end'> <FaRegCopy style={{color:status && 'green'}} onClick={copyTextToClipboard} /></div>
       
        <textarea ref={textareaRef} value={cleanedData} readOnly />
      </div>
    </div>
  );
}
