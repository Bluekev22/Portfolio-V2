import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material'
import validation from '../../components/validation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const phone = <FontAwesomeIcon icon={faPhone} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />

function Contact() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('Submit')

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.phone &&
      values.message
    ) {
      event.preventDefault()
      setErrors(validation(values))
      let response = await fetch(
        'https://powerful-depths-54009.herokuapp.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(values),
        }
      )
      setStatus('Submit')
      toast.success('Message sent successfully', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      })
      console.log(values)
      let result = await response.json()
      alert(result.status)
    } else {
      setErrors(validation(values))
    }
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-header">contact info</p>
          <p className="contact-note">
            Fill out this form and I will reach out to you as soon as I can
          </p>
          <div className="icon-text">
            <i className="icon">{phone}</i>
            <span>313-828-2632</span>
          </div>
          <div className="icon-text">
            <i className="icon">{envelope}</i>
            <span>kevin@kevinshank.tech</span>
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
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </Grid>
            <Grid
              container
              item
              lg={6}
              direction="column"
              className="form-group"
            >
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
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
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </Grid>
            <Grid
              container
              item
              lg={6}
              direction="column"
              className="form-group"
            >
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </Grid>
            <Grid
              container
              item
              lg={12}
              direction="column"
              className="form-group"
            >
              <label>Message</label>
              <input
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error">{errors.message}</p>}
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
      <ToastContainer />
    </div>
  )
}

export default Contact
