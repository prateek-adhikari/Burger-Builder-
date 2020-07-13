import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }
    render(){
        return(
            <div className="ContactData">
                <h4>Enter Your Contact Details</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Your Street" />
                    <input type="text" name="postal" placeholder="Your Postal" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
} 

export default ContactData;