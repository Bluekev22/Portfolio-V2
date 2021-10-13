import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material';

const phone = <FontAwesomeIcon icon={faPhone} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h4>contact info</h4>
                    <p>Fill out this form and I will reach out to you as soon as I can</p>
                    <div className="icon-text">
                        <i className="icon">{phone}</i>
                        <span>313-828-2632</span>
                    </div>
                    <div className="icon-text">
                        <i className="icon">{envelope}</i>
                        <span>Kevin_Shank@yahoo.com</span>
                    </div>
                </div>
                <form>
                    <Grid container spacing={6} justifyContent="space-around" className="col">
                        <Grid container item lg={6} direction="column" className="form-group">
                            <Grid item>First Name</Grid>
                            <input type="text" />
                        </Grid>
                        <Grid container item lg={6} direction="column" className="form-group">
                            <label>First Name</label>
                            <input type="text" />
                        </Grid>
                    </Grid >
                    <Grid container spacing={6} justifyContent="space-around"className="col">
                        <Grid container item lg={6} direction="column" className="form-group">
                            <label>Email</label>
                            <input type="text" />
                        </Grid>
                        <Grid container item lg={6} direction="column" className="form-group">
                            <label>Phone</label>
                            <input type="text" />
                        </Grid>
                        <Grid container item lg={12} direction="column" className="form-group">
                            <label>Message</label>
                            <input type="text" />
                        </Grid>
                        <Grid container item lg={3} direction="column" className="form-group">
                            <button>Button</button>
                        </Grid>
                    </Grid >
                </form>
            </div>
        </div>
    );
}

export default Contact;