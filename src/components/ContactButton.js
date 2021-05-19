import React, {useState} from 'react';

import { Button } from '@material-ui/core';
import ContactDialog from './ContactDialog';

function ContactButton(props) {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setContactDialogOpen(!contactDialogOpen)}>Contact Us</Button>
            {contactDialogOpen && <ContactDialog title="Contact Us" open={contactDialogOpen} setOpen={setContactDialogOpen}/>}
        </div>
    );
}

export default ContactButton;