import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;

        this.setState({
            form: {...form}
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('handleSubmit called, form values are: ', this.state.form);
    }
    render(){
        const { firstName, lastName, phone, email } = this.state.form;

        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>

                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;