const searchPosts = (posts, search) => {
  if (!search) return posts;

  const searchedPosts = posts.filter((p) => {
    return p.options?.title?.toLowerCase().trim().includes(search);
  });
  return searchedPosts;
};

const filterposts = (posts, category) => {
  if (!category) return posts;
  if (category && category !== "all") {
    const result = posts.filter((post) => post.category === category);
    return result;
  } else {
    return posts;
  }
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.categoryId === "all") {
    const { categoryId, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const categoryId = searchParams.get("categoryId");
  const search = searchParams.get("search");
  if (categoryId) query.categoryId = categoryId;
  if (search) query.search = search;
  return query;
};

export { searchPosts, filterposts, createQueryObject, getInitialQuery };
