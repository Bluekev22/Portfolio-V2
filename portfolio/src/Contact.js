import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                    <div className="form-group">

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;