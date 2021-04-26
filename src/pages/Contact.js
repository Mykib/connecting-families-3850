import './Contact.scss'

import ContactDialog from '../components/ContactDialog'
import React from 'react';

function Contact(props) {
    return (
        <div className="Contact">
            Contact
            <ContactDialog title="Contact Us"/>
        </div>
    );
}

export default Contact;