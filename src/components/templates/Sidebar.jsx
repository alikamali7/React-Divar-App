import { createQueryObject } from "src/helper/helper";

import styles from "./Sidebar.module.css";

function Sidebar({ categories, query, setQuery }) {
  const categoryHandler = (event) => {
    const categoryId = event.target.id;
    setQuery((query) => createQueryObject(query, { categoryId }));
  };

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ul>
        <li>
          <p
            id="all"
            className={!query.categoryId ? styles.selected : null}
            onClick={categoryHandler}
          >
            همه
          </p>
        </li>
        {categories.data.map((category) => (
          <li key={category._id} onClick={categoryHandler}>
            <img src={`${category.icon}.svg`} />
            <p
              id={category._id}
              className={
                query.categoryId === category._id ? styles.selected : null
              }
            >
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
