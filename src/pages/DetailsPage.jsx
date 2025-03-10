import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getAllPosts } from "services/user";
import Loader from "src/components/modules/Loader";
import DescriptionDetailsPage from "src/components/templates/DescriptionDetailsPage";

import styles from "./DetailsPage.module.css";
import { Lightbox } from "react-modal-image";

function DetailsPage() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleZoom = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) return <Loader />;

  const post = data.data.posts.find((post) => post._id === id);

  return (
    <div className={styles.container}>
      <DescriptionDetailsPage post={post} />
      <div className={styles.ImgSection}>
        <img
          onClick={toggleZoom}
          src={`${baseURL}${post.images[0]}`}
          alt={post.options.title}
        />
        {isOpen && (
          <Lightbox
            large={`${baseURL}${post.images[0]}`}
            alt={post.options.title}
            onClose={() => setIsOpen(!isOpen)}
          />
        )}
        <p>گزارش آگهی</p>
      </div>
    </div>
  );
}

export default DetailsPage;
