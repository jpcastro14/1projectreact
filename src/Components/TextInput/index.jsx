import './styles.css';

export const TextInput = ({ searchValue, actionfn }) => {
    return (
        <input
            className="text-input"
            type="search"
            onChange={actionfn}
            value={searchValue}
            placeholder="Procurar Post"
        />
    );
}
