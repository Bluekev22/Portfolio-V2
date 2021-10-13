import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";

const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

function Contact() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
      setValues({
          ...values,
          [event.target.name]: event.target.value,
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

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
          <Grid container spacing={3} className="col">
            <Grid
              container
              item
              lg={6}
              direction="column"
              className="form-group"
            >
              <label>First Name</label>
              <input type="text" name="firstName" value={values.firstName}
              onChange={handleChange} />
            </Grid>
            <Grid
              container
              item
              lg={6}
              direction="column"
              className="form-group"
            >
              <label>Last Name</label>
              <input type="text" name="lastName" value={values.lastName}
              onChange={handleChange} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent="space-around"
            className="col"
          >
            <Grid
              container
              item
              lg={6}
              direction="column"
              className="form-group"
            >
              <label>Email</label>
              <input type="email" name="email" value={values.email}
              onChange={handleChange} />
            </Grid>
            <Grid
              container
              item
              lg={6}
              direction="column"
              className="form-group"
            >
              <label>Phone</label>
              <input type="tel" name="phone" value={values.phone}
              onChange={handleChange} />
            </Grid>
            <Grid
              container
              item
              lg={12}
              direction="column"
              className="form-group"
            >
              <label>Message</label>
              <input type="text" name="message" value={values.message}
              onChange={handleChange} />
            </Grid>
            <Grid
              container
              item
              lg={3}
              direction="column"
              className="form-group"
            >
              <button onClick={handleFormSubmit}>submit</button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Contact;
