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
                description: "this is the desc",
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
                facebook: "ww.facebook.com",
                twitter: "ww.facebook.com",
                instagram: "ww.facebook.com",
                linkedin: "ww.facebook.com",
                github: "ww.facebook.com",
                website: "ww.facebook.com"
            }
        ]
    }

    render() {
        return (
            <>
                <ol className="list-container">
                    {
                        this.state.data.map(contact => (
                            <li key={contact.id} className="list-element">
                                <div>Name: {contact.name}</div>
                                <span>Surname: {contact.surname}</span>
                                <span>location: {contact.location}</span>
                                <span>age: {contact.age}</span>
                                <span>email: {contact.email}</span>
                                <span>description: {contact.description}</span>
                                <span>facebook: {contact.facebook}</span>
                                <span>twitter: {contact.twitter}</span>
                                <span>instagram: {contact.instagram}</span>
                                <span>linkedin: {contact.linkedin}</span>
                                <span>github: {contact.github}</span>
                                <div>website: {contact.website}</div>
                            </li>
                        ))
                    }
                </ol>
            </>
        )
    }
}

export default Contacts