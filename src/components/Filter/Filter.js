import s from './Filter.module.css';
const Filter = ({ value, onChange }) => {
    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type="text"
                className={s.input}
                value={value}
                onChange={onChange} />
        </label>
    )
}

export default Filter;