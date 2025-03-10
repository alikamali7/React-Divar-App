import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { sp } from "utils/numbers";
import { filterposts, getInitialQuery, searchPosts } from "src/helper/helper";

import styles from "./Main.module.css";

function Main({ posts, query, setQuery, setSearch }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [displayed, setDisplayed] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
  }, []);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalPosts = searchPosts(posts.data.posts, query.search);
    finalPosts = filterposts(finalPosts, query.categoryId);
    setDisplayed(finalPosts);
  }, [query]);

  return (
    <div className={styles.container}>
      {displayed.map((post) => (
        <Link key={post._id} to={`/details/${post._id}`}>
          <div className={styles.card}>
            <div className={styles.info}>
              <p>{post.options?.title}</p>
              <div>
                <p>{sp(post.amount)} تومان</p>
                <span>{post.options?.city}</span>
              </div>
            </div>
            <img src={`${baseURL}${post.images[0]}`} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Main;
