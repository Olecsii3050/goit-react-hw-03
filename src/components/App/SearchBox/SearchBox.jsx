import css from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
