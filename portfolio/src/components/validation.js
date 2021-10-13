

const validation = (values) => {

    let errors={};

    if(!values.firstName) {
        errors.firstName="First name is required."
    }

    if(!values.lastName) {
        errors.lastName="Last name is required."
    }

    if(!values.email) {
        errors.email="Email is required."
    } else if(!/\S+@\S+\S+/.test(values.email)) {
        errors.email="Email is invalid."
    }

    if(!values.phone) {
        errors.phone="Phone number is required."
    } else if(!/(?:(\+1)[ -]?)?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/.test(values.phone)) {
        errors.phone="Phone number is invalid."
    }

    if(!values.message) {
        errors.message="Message is required."
    }

    return errors;
}

export default validation;