import React from 'react';
import './style.css';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer">
      <div className="logos-footer">
        <AiOutlineYoutube className="icon" />
        <AiOutlineInstagram className="icon" />
        <GoMail className="icon" />
      </div>
    </div>
  );
}

export default Footer;
