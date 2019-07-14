import React, { Component } from 'react'
import './Contacts.css'

class Contacts extends Component {
    state = {
        data: [
            { 
                id: 1,
                name: "Rich",
                surname: "McDonalds",
                location: "New York", // we should use lat and log
                age: 34, // Maybe we should add the birthday date and calculate the age
                email: "myemail@gmail.com",
                description: "this is the desc grtg trgbr trbrtb rtbtrb rtbtbythbt rtynytn tnyner trbewtnw rtbsadfb febnmpoterfgvre dvaergwerb efbtrbaerebt rtbbsbrt trbrtb rtbtrb rtbtsbt verver",
                facebook: "ww.facebook.com",
                twitter: "ww.facebook.com",
                instagram: "ww.facebook.com",
                linkedin: "ww.facebook.com",
                github: "ww.facebook.com",
                website: "ww.facebook.com"
            },
            { 
                id: 1,
                name: "Rich",
                surname: "McDonalds",
                location: "New York", // we should use lat and log
                age: 34, // Maybe we should add the birthday date and calculate the age
                email: "myemail@gmail.com",
                description: "this is the desc",
                facebook: "www.facebook.com",
                twitter: "www.facebook.com",
                instagram: "www.facebook.com",
                linkedin: "www.facebook.com",
                github: "www.facebook.com",
                website: "www.facebook.com"
            }
        ]
    }

    render() {
        return (
            <>
                <ul className="list-container">
                    {
                        this.state.data.map(contact => (
                            <li key={contact.id} className="list-element">
                                <div className="left">
                                    <div><span className="element-title">Name:</span> {contact.name} {contact.surname}</div>
                                    <div><span className="element-title">Location:</span> {contact.location}</div>
                                    <div><span className="element-title">Age:</span> {contact.age}</div>
                                    <div><span className="element-title">email:</span> {contact.email}</div>
                                </div>
                                <div className="center">
                                    <div><span className="element-title">Description:</span> <br/> {contact.description}</div>
                                </div>
                                <div className="right">
                                    <div><span className="element-title">Facebook:</span> {contact.facebook}</div>
                                    <div><span className="element-title">Twitter:</span> {contact.twitter}</div>
                                    <div><span className="element-title">Instagram:</span> {contact.instagram}</div>
                                    <div><span className="element-title">Linkedin:</span> {contact.linkedin}</div>
                                    <div><span className="element-title">Github:</span> {contact.github}</div>
                                    <div><span className="element-title">Website:</span> {contact.website}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default Contacts