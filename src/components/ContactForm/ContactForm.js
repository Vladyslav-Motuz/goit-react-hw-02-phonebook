import React from "react";
import s from './ContactForm.module.css';

class ContactForm extends React.Component {
    state = {        
        name: "",
        number: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();        
        this.props.onSubmit(this.state);

        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: "",
            number: ""
        })
    }

    render() {
        const { name, number } = this.state;
        return (
            <form
                onSubmit={this.handleSubmit}
                className={s.form}>
                <label className={s.form__label}>
                    Имя <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={this.handleChange}
                        className={s.form__input}
                        required
                    />
                </label>

                <label className={s.form__label}>
                    Телефон <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={this.handleChange}
                        className={s.form__input}
                        required
                    />
                </label>

                <button type="submit" className={s.form__button}>Add contact</button>
            </form>
        )
    }
}
export default ContactForm;