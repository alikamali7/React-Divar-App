import styles from "./Search.module.css";
import { createQueryObject } from "src/helper/helper";

function Search({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        placeholder="جستو و جو در آگهی ها"
        onChange={(e) => setSearch(e.target.value?.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>جستو و جو</button>
    </div>
  );
}

export default Search;
