import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteCategory, getCategory } from "services/admin";
import Loader from "../modules/Loader";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading });
  //   console.log(data.data);

  const { mutate, error } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });

  const deleteHandler = (event) => {
    const id = event.target.id;
    console.log(event.target.id);
    // deleteCategory(id);
    mutate(id);
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <button id={i._id} onClick={deleteHandler}>
              Delete
            </button>
            <p>slug: {i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
