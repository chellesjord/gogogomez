import React from 'react';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';


const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container">
                <p>CALL NOW at (210) 685-1356 </p>
                <a href='https://www.facebook.com/gogogomezlunchbox'><FacebookOutlined className='Facebook' /></a>
                <a href='https://www.instagram.com/gogo_gomez_lunchbox/'><InstagramOutlined className='Insta' /></a>
                <a href='https://www.snapchat.com/add/gogo-lunchbox'>SnapChat</a>
            </div>
        </footer>
    );
};

export default Footer;
