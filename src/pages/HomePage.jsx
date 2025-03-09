import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import Loader from "components/modules/Loader";
import { getAllPosts } from "services/user";
import { getCategory } from "services/admin";
import { useState } from "react";
import Search from "src/components/templates/Search";

const style = { display: "flex" };

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <>
          <Search setQuery={setQuery} search={search} setSearch={setSearch} />
          <div style={style}>
            <Sidebar
              categories={categories}
              query={query}
              setQuery={setQuery}
            />
            <Main
              posts={posts}
              query={query}
              setQuery={setQuery}
              setSearch={setSearch}
            />
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
