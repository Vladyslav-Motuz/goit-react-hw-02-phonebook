import React from "react";
import s from './ContactList.module.css';

// import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact}) => {
    return (
        <ul className={s.contact__list}>
            {contacts.map(contact =>
                <li key={contact.id} className={s.contact__item}>
                    <p className={s.contact__text}>{contact.name}: {contact.number}</p>
                    <button
                        className={s.contact__button}
                        onClick={() => onDeleteContact(contact.id)}>delete</button>
                </li>)}
        </ul>
    )
}

export default ContactList;